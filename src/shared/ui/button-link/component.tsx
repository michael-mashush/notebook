import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Link
} from 'react-router-dom';

import {
  clsx
} from 'clsx';

import {
  ButtonClasses,
  Icon
} from '..';

import Props   from './component.props';
import classes from './component.module.scss';

const ButtonLink: ForwardRefRenderFunction<HTMLAnchorElement, Props> = (props, ref) => {

  const {
    children,
    className,
    startIcon,
    endIcon,
    variant  = 'primary',
    justify  = 'center',
    size     = 'medium',
    onlyIcon = (!children && !endIcon && !!startIcon) || (!children && !startIcon && !!endIcon),
    fullWidth = false,
    href,
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes[`button-link`]]:                      true,
    [ButtonClasses[`button`]]:                     true,
    [ButtonClasses[`button--variant-${variant}`]]: variant,
    [ButtonClasses[`button--justify-${justify}`]]: justify,
    [ButtonClasses[`button--size-${size}`]]:       size,
    [ButtonClasses['button--only-icon']]:          onlyIcon,
    [ButtonClasses['button--full-width']]:         fullWidth
  });

  return (
    <Link ref={ref} className={classNames} to={href} {...otherProps}>
      {startIcon && (
        <Icon
          src={startIcon}
          size={size}
        />
      )}
      {children && (
        <span
          children={children}
          className={ButtonClasses['button-text']}
        />
      )}
      {endIcon && (
        <Icon
          src={endIcon}
          size={size}
        />
      )}
    </Link>
  );

};

export default memo(forwardRef(ButtonLink));