import {
  type AuthError,
  type UserResponse
} from '@supabase/supabase-js';
import {
  supabase
} from 'shared/api';

export type UpdatePasswordParams = { password: string; };
export type UpdatePasswordResult = UserResponse['data'];
export type UpdatePasswordError = AuthError;

export async function updatePassword(params: UpdatePasswordParams): Promise<UpdatePasswordResult> {

  const {
    password
  } = params;

  const response = await supabase.auth.updateUser({
    password
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;

}