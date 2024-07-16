import {
  memo,
  Fragment,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  LogOutIcon
} from 'lucide-react';

import {
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Button,
  WarningDialog
} from 'shared/ui';

import {
  useSignOut
} from '../../api';

import Props from './component.props';

const SignOutButton: FunctionComponent<Props> = (props) => {

  const {
    children  = 'Logout',
    variant   = 'outlined',
    fullWidth = true,
    loading   = false,
    onClick,
    ...otherProps
  } = props;

  const signOut       = useSignOut();
  const warningDialog = useVisibility(signOut.isError);

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    signOut.mutate();
  });

  return (
    <Fragment>
      <Button
        children={children}
        startIcon={LogOutIcon}
        variant={variant}
        fullWidth={fullWidth}
        loading={loading || signOut.isPending}
        onClick={handleClick}
        {...otherProps}
      />
      <WarningDialog
        title="Something went wrong"
        text={signOut.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(SignOutButton);