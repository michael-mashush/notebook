import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  NavLink
} from 'react-router-dom';

import {
  clsx
} from 'clsx';

import {
  useImmutableCallback
} from 'shared/lib';

import {
  ButtonClasses,
  Icon
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const NavbarLink: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (props, ref) => {

  const {
    children,
    className,
    startIcon,
    href,
    end = true,
    ...otherProps
  } = props;

  const getClassName = useImmutableCallback(({ isActive }: { isActive: boolean; }) => {
    return clsx(className, {
      [classes['navbar-link']]:                     true,
      [ButtonClasses['button']]:                    true,
      [ButtonClasses['button--variant-ghost']]:     !isActive,
      [ButtonClasses['button--variant-secondary']]: isActive,
      [ButtonClasses['button--justify-start']]:     true,
      [ButtonClasses['button--size-medium']]:       true,
      [ButtonClasses['button--full-width']]:        true
    });
  });

  return (
    <NavLink ref={ref} className={getClassName} to={href} end={end} {...otherProps}>
      {startIcon && (
        <Icon src={startIcon} />
      )}
      {children && (
        <span className={ButtonClasses['button-text']}>
          {children}
        </span>
      )}
    </NavLink>
  );

};

export default memo(forwardRef(NavbarLink));