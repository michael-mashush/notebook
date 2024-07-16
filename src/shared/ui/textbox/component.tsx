import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  Icon
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const Textbox: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {

  const {
    className,
    startIcon,
    endIcon,
    role    = 'textbox',
    type    = 'text',
    variant = 'outlined',
    invalid = false,
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['textbox']]:                     true,
    [classes[`textbox--variant-${variant}`]]: variant,
    [classes['textbox--invalid']]:            invalid,
    [classes['textbox--with-start-icon']]:    startIcon,
    [classes['textbox--with-end-icon']]:      endIcon
  });

  return (
    <div className={classes['wrapper']}>
      {startIcon && (
        <Icon
          src={startIcon}
          className={classes['start-icon']}
        />
      )}
      <input
        ref={ref}
        className={classNames}
        role={role}
        type={type}
        {...otherProps}
      />
      {endIcon && (
        <Icon
          src={endIcon}
          className={classes['end-icon']}
        />
      )}
    </div>
  );

};

export default memo(forwardRef(Textbox));