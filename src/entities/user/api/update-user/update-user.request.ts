import {
  type UserResponse,
  type AuthError
} from '@supabase/supabase-js';

import {
  STORAGES,
  supabase
} from 'shared/api';

export type UpdateUserParams = {
  name:    string;
  email:   string;
  avatar?: File;
};

export type UpdateUserResult = UserResponse['data'];
export type UpdateUserError  = AuthError;

export async function updateUser(params: UpdateUserParams): Promise<UpdateUserResult> {

  const {
    name,
    email,
    avatar
  } = params;

  const session = await supabase.auth.getSession();

  const isNewName  = session.data.session?.user.user_metadata?.name !== name;
  const isNewEmail = session.data.session?.user.email               !== email;

  let avatarURL: string | undefined;

  if (avatar) {
    const deleteAvatar = await supabase.storage
      .from(STORAGES.AVATARS)
      .remove([ `${session.data.session!.user.id}/${session.data.session!.user.user_metadata.avatar_url}` ]);

    if (deleteAvatar.error) {
      throw deleteAvatar.error;
    }

    const uploadAvatar = await supabase.storage
      .from(STORAGES.AVATARS)
      .upload(`${session.data.session!.user.id}/${Date.now()}${avatar.name.split('.').pop()}`, avatar, { upsert: true });

    if (uploadAvatar.error) {
      throw uploadAvatar.error;
    }

    avatarURL = uploadAvatar.data.path
      ? supabase.storage.from(STORAGES.AVATARS).getPublicUrl(uploadAvatar.data.path).data.publicUrl
      : undefined;
  }

  const response = await supabase.auth.updateUser({
    data: {
      user_name:  isNewName ? name : undefined,
      avatar_url: avatarURL
    },
    email: isNewEmail ? email : undefined
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;

}