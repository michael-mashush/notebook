import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const PaginationList: ForwardRefRenderFunction<HTMLUListElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <ul ref={ref} className={clsx(className, classes['pagination-list'])} {...otherProps}>
      {children}
    </ul>
  );

};

export default forwardRef(PaginationList);