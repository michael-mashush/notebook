import {
  type FunctionComponent
} from 'react';

import {
  AuthHeader
} from 'widgets/auth-header';

import {
  AuthFooter
} from 'widgets/auth-footer';

import {
  UpdatePasswordForm
} from 'features/auth';

import {
  AuthLayout,
  AuthLayoutContent,
  AuthLayoutDescription,
  AuthLayoutFooter,
  AuthLayoutHeader,
  AuthLayoutInner,
  AuthLayoutIntro,
  AuthLayoutTitle
} from 'shared/ui';

const UpdatePasswordPage: FunctionComponent = () => {

  return (
    <AuthLayout>
      <AuthLayoutHeader>
        <AuthHeader />
      </AuthLayoutHeader>
      <AuthLayoutContent>
        <AuthLayoutIntro>
          <AuthLayoutTitle>
            Update password
          </AuthLayoutTitle>
          <AuthLayoutDescription>
            Enter a new password that will be used to login to your account
          </AuthLayoutDescription>
        </AuthLayoutIntro>
        <AuthLayoutInner>
          <UpdatePasswordForm />
        </AuthLayoutInner>
      </AuthLayoutContent>
      <AuthLayoutFooter>
        <AuthFooter />
      </AuthLayoutFooter>
    </AuthLayout>
  );

};

export default UpdatePasswordPage;