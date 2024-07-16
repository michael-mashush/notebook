import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Button
} from 'shared/ui';

import Props from './component.props';

const Toggle: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {

  const {
    children,
    defaultVariant = 'ghost',
    selectedVariant = 'secondary',
    selected = false,
    ...otherProps
  } = props;

  return (
    <Button
      ref={ref}
      children={children}
      variant={selected ? selectedVariant : defaultVariant}
      {...otherProps}
    />
  );

};

export default memo(forwardRef(Toggle));