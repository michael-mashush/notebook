import {
  type FunctionComponent
} from 'react';

import {
  useLocation
} from 'react-router-dom';

import {
  GithubButton,
  GitlabButton,
  SignInForm,
  SignUpForm
} from 'features/auth';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  Link,
  List,
  ListItem,
  Paragraph,
  Separator
} from 'shared/ui';

import classes from './widget.module.scss';

const AuthActions: FunctionComponent = () => {

  const location = useLocation();
  const isSignIn = location.pathname === ROUTER_CONFIG.SIGN_IN_PAGE.PATH;
  const isSignUp = location.pathname === ROUTER_CONFIG.SIGN_UP_PAGE.PATH;

  return (
    <div className={classes['auth-actions']}>
      <div className={classes['main-actions']}>
        {isSignIn && <SignInForm />}
        {isSignUp && <SignUpForm />}
        <Separator>
          <Paragraph size="xs" color="muted" casing="uppercase">
            or
          </Paragraph>
        </Separator>
        <List>
          <ListItem>
            <GithubButton />
          </ListItem>
          <ListItem>
            <GitlabButton />
          </ListItem>
        </List>
      </div>
      <div className={classes['help-actions']}>
        <Paragraph align="center">
          {isSignIn && (
            <Link color="muted" href={ROUTER_CONFIG.SIGN_UP_PAGE.PATH}>
              I don't have an account yet
            </Link>
          )}
          {isSignUp && (
            <Link color="muted" href={ROUTER_CONFIG.SIGN_IN_PAGE.PATH}>
              I already have an account
            </Link>
          )}
        </Paragraph>
        <Paragraph align="center">
          <Link color="muted" href={ROUTER_CONFIG.RESET_PASSWORD_PAGE.PATH}>
            I don't remember the password
          </Link>
        </Paragraph>
      </div>
    </div>
  );

};

export default AuthActions;