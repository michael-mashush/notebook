import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  SiGithub
} from '@icons-pack/react-simple-icons';

import {
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Button,
  WarningDialog
} from 'shared/ui';

import {
  useSignInWithGithub
} from '../../api';

import Props from './component.props';

const GithubButton: FunctionComponent<Props> = (props) => {

  const {
    children  = 'Continue with GitHub',
    startIcon = SiGithub,
    variant   = 'outlined',
    fullWidth = true,
    loading   = false,
    onClick,
    ...otherProps
  } = props;

  const signInWithGithub = useSignInWithGithub();
  const warningDialog    = useVisibility(signInWithGithub.isError);

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    signInWithGithub.mutate();
  });

  return (
    <Fragment>
      <Button
        children={children}
        startIcon={startIcon}
        variant={variant}
        fullWidth={fullWidth}
        loading={loading || signInWithGithub.isSuccess}
        onClick={handleClick}
        {...otherProps}
      />
      <WarningDialog
        title="Something went wrong"
        text={signInWithGithub.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(GithubButton);