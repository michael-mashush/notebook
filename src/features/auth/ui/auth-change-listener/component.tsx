import {
  memo,
  type FunctionComponent
} from 'react';

import {
  useUserStore
} from 'entities/user';

import {
  supabase
} from 'shared/api';

import {
  useMountEffect,
  useVisibility
} from 'shared/lib';

import {
  Loader
} from 'shared/ui';

const AuthChangeListener: FunctionComponent = () => {

  const authLoader = useVisibility(true);
  const insertUser = useUserStore((store) => store.insertUser);
  const updateUser = useUserStore((store) => store.updateUser);
  const deleteUser = useUserStore((store) => store.deleteUser);

  useMountEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user && event === 'INITIAL_SESSION') insertUser(session.user);
      if (session?.user && event === 'USER_UPDATED')    updateUser(session!.user);
      if (session?.user && event === 'SIGNED_IN')       updateUser(session!.user);
      if (event === 'SIGNED_OUT')                       deleteUser();
      authLoader.hide();
    });
    return authListener.subscription.unsubscribe;
  });

  return (
    <Loader
      visible={authLoader.isVisible}
      description="Authentication"
    />
  );

};

export default memo(AuthChangeListener);