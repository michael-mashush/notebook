import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const List: ForwardRefRenderFunction<HTMLUListElement, Props> = (props, ref) => {

  const {
    children,
    className,
    direction = 'column',
    justify = 'start',
    align = 'center',
    gap = 'xs',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['list']]:                         true,
    [classes[`list--direction-${direction}`]]: direction,
    [classes[`list--justify-${justify}`]]:     justify,
    [classes[`list--align-${align}`]]:         align,
    [classes[`list--gap-${gap}`]]:             gap
  });

  return (
    <ul ref={ref} className={classNames} {...otherProps}>
      {children}
    </ul>
  );

};

export default forwardRef(List);