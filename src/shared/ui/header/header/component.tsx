import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Header: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <header ref={ref} className={clsx(className, classes['header'])} {...otherProps}>
      <div className={classes['header-inner']}>
        {children}
      </div>
    </header>
  );

};

export default forwardRef(Header);