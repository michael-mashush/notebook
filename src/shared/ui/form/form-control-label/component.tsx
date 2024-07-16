import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import {
  Label
} from '../..';

import Props   from './component.props';
import classes from './component.module.scss';

const FormControlLabel: ForwardRefRenderFunction<HTMLLabelElement, Props> = (props, ref) => {

  const {
    children,
    className,
    control,
    position = 'right',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['form-control-label']]:                       true,
    [classes[`form-control-label--position-${position}`]]: position
  });

  return (
    <Label ref={ref} className={classNames} {...otherProps}>
      {control}{children}
    </Label>
  );

};

export default forwardRef(FormControlLabel);