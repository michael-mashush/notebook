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

const PaginationEllipsis: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    className,
    ...otherProps
  } = props;

  return (
    <div ref={ref} className={clsx(className, classes['pagination-ellipsis'])} {...otherProps}>
      ...
    </div>
  );

};

export default memo(forwardRef(PaginationEllipsis));