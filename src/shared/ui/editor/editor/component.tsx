import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import Props   from './component.props';
import classes from './component.module.scss';

const Editor: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children
  } = props;

  return (
    <div ref={ref} className={classes['editor']}>
      {children}
    </div>
  );

};

export default forwardRef(Editor);