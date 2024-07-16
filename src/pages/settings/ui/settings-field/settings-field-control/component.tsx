import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const SettingsFieldControl: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <div ref={ref} className={clsx(className, classes['settings-field-control'])} {...otherProps}>
      {children}
    </div>
  );

};

export default forwardRef(SettingsFieldControl);