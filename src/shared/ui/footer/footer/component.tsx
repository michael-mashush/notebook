import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Footer: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <footer ref={ref} className={clsx(className, classes['footer'])} {...otherProps}>
      <div className={classes['footer-inner']}>
        {children}
      </div>
    </footer>
  );

};

export default forwardRef(Footer);