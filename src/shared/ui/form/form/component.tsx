import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Form: ForwardRefRenderFunction<HTMLFormElement, Props> = (props, ref) => {

  const {
    children,
    className,
    role = 'form',
    ...otherProps
  } = props;

  return (
    <form ref={ref} className={clsx(className, classes['form'])} role={role} {...otherProps}>
      {children}
    </form>
  );

};

export default forwardRef(Form);