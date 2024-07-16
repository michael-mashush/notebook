import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const CardHeader: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <header ref={ref} className={clsx(className, classes['card-header'])} {...otherProps}>
      {children}
    </header>
  );

};

export default forwardRef(CardHeader);