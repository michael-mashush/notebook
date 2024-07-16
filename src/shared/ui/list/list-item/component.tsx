import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const ListItem: ForwardRefRenderFunction<HTMLLIElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <li ref={ref} className={clsx(className, classes['list-item'])} {...otherProps}>
      {children}
    </li>
  );

};

export default forwardRef(ListItem);