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

const Icon: ForwardRefRenderFunction<SVGSVGElement, Props> = (props, ref) => {

  const {
    src: CurrentIcon,
    size = 'medium',
    role = 'img',
    className,
    strokeWidth = '2.25',
    ...otherProps
  } = props;

  const classNames = clsx(className, {
    [classes['icon']]:               true,
    [classes[`icon--size-${size}`]]: size
  });

  return (
    <CurrentIcon
      ref={ref}
      role={role}
      className={classNames}
      strokeWidth={strokeWidth}
      {...otherProps}
    />
  );

};

export default memo(forwardRef(Icon));