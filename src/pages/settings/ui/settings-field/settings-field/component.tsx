import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const SettingsField: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <section ref={ref} className={clsx(className, classes['settings-field'])} {...otherProps}>
      {children}
    </section>
  );

};

export default forwardRef(SettingsField);