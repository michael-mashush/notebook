import {
  MouseEvent,
  memo,
  type FunctionComponent
} from 'react';

import {
  MenuIcon,
  XIcon
} from 'lucide-react';

import {
  useImmutableCallback
} from 'shared/lib';

import {
  Button,
  Tooltip
} from 'shared/ui';

import {
  useMenuStore
} from '../../model';

import Props from './component.props';

const BurgerButton: FunctionComponent<Props> = (props) => {

  const {
    startIcon,
    variant   = 'outlined',
    loading   = false,
    fullWidth = false,
    onClick,
    title = 'Toggle menu',
    'aria-label': ariaLabel = 'Toggle menu',
    ...otherProps
  } = props;

  const isOpened = useMenuStore((store) => store.isOpened);
  const toggle   = useMenuStore((store) => store.toggle);

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    toggle();
  });

  return (
    <Tooltip title={title}>
      <Button
        startIcon={startIcon ?? isOpened ? XIcon : MenuIcon}
        variant={variant}
        loading={loading}
        fullWidth={fullWidth}
        onClick={handleClick}
        aria-label={ariaLabel}
        {...otherProps}
      />
    </Tooltip>
  );

};

export default memo(BurgerButton);