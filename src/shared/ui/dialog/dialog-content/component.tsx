import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const DialogContent: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    bordered = false,
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['dialog-content']]:           true,
    [classes['dialog-content--bordered']]: bordered
  });

  return (
    <div ref={ref} className={classNames} {...otherProps}>
      {children}
    </div>
  );

};

export default forwardRef(DialogContent);