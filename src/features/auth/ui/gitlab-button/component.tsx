import {
  memo,
  Fragment,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  SiGitlab
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
  useSignInWithGitlab
} from '../../api';

import Props from './component.props';

const GitlabButton: FunctionComponent<Props> = (props) => {

  const {
    children  = 'Continue with GitLab',
    startIcon = SiGitlab,
    variant   = 'outlined',
    fullWidth = true,
    loading   = false,
    onClick,
    ...otherProps
  } = props;

  const signInWithGitlab = useSignInWithGitlab();
  const warningDialog    = useVisibility(signInWithGitlab.isError);

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    signInWithGitlab.mutate();
  });

  return (
    <Fragment>
      <Button
        children={children}
        startIcon={startIcon}
        variant={variant}
        fullWidth={fullWidth}
        loading={loading || signInWithGitlab.isSuccess}
        onClick={handleClick}
        {...otherProps}
      />
      <WarningDialog
        title="Something went wrong"
        text={signInWithGitlab.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(GitlabButton);