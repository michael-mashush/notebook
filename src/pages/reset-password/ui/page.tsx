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
  ResetPasswordForm
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

const ResetPasswordPage: FunctionComponent = () => {

  return (
    <AuthLayout>
      <AuthLayoutHeader>
        <AuthHeader />
      </AuthLayoutHeader>
      <AuthLayoutContent>
        <AuthLayoutIntro>
          <AuthLayoutTitle>
            Reset password
          </AuthLayoutTitle>
          <AuthLayoutDescription>
            Enter the email address associated with your account to reset your password
          </AuthLayoutDescription>
        </AuthLayoutIntro>
        <AuthLayoutInner>
          <ResetPasswordForm />
        </AuthLayoutInner>
      </AuthLayoutContent>
      <AuthLayoutFooter>
        <AuthFooter />
      </AuthLayoutFooter>
    </AuthLayout>
  );

};

export default ResetPasswordPage;