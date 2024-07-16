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

const Label: ForwardRefRenderFunction<HTMLLabelElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <label ref={ref} className={clsx(className, classes['label'])} {...otherProps}>
      {children}
    </label>
  );

};

export default memo(forwardRef(Label));