import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const SheetFooter: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <footer ref={ref} className={clsx(className, classes['sheet-footer'])} {...otherProps}>
      {children}
    </footer>
  );

};

export default forwardRef(SheetFooter);