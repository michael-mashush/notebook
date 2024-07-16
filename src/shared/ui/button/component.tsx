import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import {
  Icon,
  Spinner
} from '..';

import {
  ANIMATION_TRANSITION,
  ANIMATION_INITIAL,
  ANIMATION_ANIMATE,
  ANIMATION_EXIT
} from './constants';

import Props   from './component.props';
import classes from './component.module.scss';

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {

  const {
    children,
    className,
    startIcon,
    endIcon,
    variant   = 'primary',
    justify   = 'center',
    size      = 'medium',
    loading   = false,
    disabled  = loading,
    onlyIcon  = !children && ((!endIcon && !!startIcon) || (!startIcon && !!endIcon)),
    fullWidth = false,
    type      = 'button',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['button']]:                     true,
    [classes[`button--variant-${variant}`]]: variant,
    [classes[`button--justify-${justify}`]]: justify,
    [classes[`button--size-${size}`]]:       size,
    [classes['button--loading']]:            loading,
    [classes['button--only-icon']]:          onlyIcon,
    [classes['button--full-width']]:         fullWidth
  });

  return (
    <button ref={ref} className={classNames} disabled={disabled} type={type} {...otherProps}>
      {startIcon && (
        <Icon
          src={startIcon}
          size={size}
        />
      )}
      {children && (
        <span
          children={children}
          className={classes['button-text']}
        />
      )}
      {endIcon && (
        <Icon
          src={endIcon}
          size={size}
        />
      )}
      <AnimatePresence initial={false}>
        {loading && (
          <motion.div
            className={classes['button-loader']}
            transition={ANIMATION_TRANSITION}
            initial={ANIMATION_INITIAL}
            animate={ANIMATION_ANIMATE}
            exit={ANIMATION_EXIT}
          >
            <Spinner />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );

};

export default memo(forwardRef(Button));