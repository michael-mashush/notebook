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
  AuthActions
} from 'widgets/auth-actions';

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

const SignInPage: FunctionComponent = () => {

  return (
    <AuthLayout>
      <AuthLayoutHeader>
        <AuthHeader />
      </AuthLayoutHeader>
      <AuthLayoutContent>
        <AuthLayoutIntro>
          <AuthLayoutTitle>
            Login to account
          </AuthLayoutTitle>
          <AuthLayoutDescription>
            Enter your email address and password to login to your account
          </AuthLayoutDescription>
        </AuthLayoutIntro>
        <AuthLayoutInner>
          <AuthActions />
        </AuthLayoutInner>
      </AuthLayoutContent>
      <AuthLayoutFooter>
        <AuthFooter />
      </AuthLayoutFooter>
    </AuthLayout>
  );

};

export default SignInPage;