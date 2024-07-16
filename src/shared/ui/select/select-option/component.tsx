import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Toggle
} from '../..';

import Props from './component.props';

const SelectOption: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {

  const {
    className,
    label,
    value,
    role = 'option',
    ...otherProps
  } = props;

  return (
    <Toggle
      ref={ref}
      className={className}
      data-value={value}
      fullWidth
      justify="start"
      role={role}
      {...otherProps}
    >
      {label}
    </Toggle>
  );

};

export default forwardRef(SelectOption);