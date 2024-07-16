import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Switch: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {

  const {
    className,
    role = 'switch',
    ...otherProps
  } = props;

  return (
    <div className={classes['wrapper']}>
      <input
        ref={ref}
        className={clsx(className, classes['checkbox'])}
        role={role}
        type="checkbox"
        {...otherProps}
      />
      <div className={classes['switch']}>
        <div className={classes['thumb']} />
      </div>
    </div>
  );

};

export default memo(forwardRef(Switch));