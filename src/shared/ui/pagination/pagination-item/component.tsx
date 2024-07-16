import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const PaginationItem: ForwardRefRenderFunction<HTMLLIElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <li ref={ref} className={clsx(className, classes['pagination-item'])} {...otherProps}>
      {children}
    </li>
  );

};

export default forwardRef(PaginationItem);