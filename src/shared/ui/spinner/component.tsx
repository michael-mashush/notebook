import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Loader2
} from 'lucide-react';

import {
  clsx
} from 'clsx';

import {
  Icon
} from '..';

import Props   from './component.props';
import classes from './component.module.scss';

const Spinner: ForwardRefRenderFunction<SVGSVGElement, Props> = (props, ref) => {

  const {
    className,
    src = Loader2,
    ...otherProps
  } = props;

  return (
    <Icon
      ref={ref}
      src={src}
      className={clsx(className, classes['spinner'])}
      {...otherProps}
    />
  );

};

export default memo(forwardRef(Spinner));