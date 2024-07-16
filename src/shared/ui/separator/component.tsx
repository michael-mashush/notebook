import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Separator: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    orientation = 'horizontal',
    padding,
    gap = children ? '2xl' : undefined,
    role = 'none',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['separator']]:                              true,
    [classes[`separator--orientation-${orientation!}`]]: orientation,
    [classes[`separator--padding-${padding!}`]]:         padding,
    [classes[`separator--gap-${gap!}`]]:                 gap
  });

  return (
    <div ref={ref} className={classNames} role={role} {...otherProps}>
      {children}
    </div>
  );

};

export default forwardRef(Separator);