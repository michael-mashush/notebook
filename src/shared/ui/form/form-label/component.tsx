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

const FormLabel: ForwardRefRenderFunction<HTMLLabelElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <Label ref={ref} className={clsx(className, classes['form-label'])} {...otherProps}>
      {children}
    </Label>
  );

};

export default forwardRef(FormLabel);