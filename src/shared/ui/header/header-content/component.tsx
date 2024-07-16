import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const HeaderContent: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <div ref={ref} className={clsx(className, classes['header-content'])} {...otherProps}>
      {children}
    </div>
  );

};

export default forwardRef(HeaderContent);