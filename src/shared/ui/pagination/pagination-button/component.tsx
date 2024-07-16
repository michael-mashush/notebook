import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Toggle
} from 'shared/ui';

import Props from './component.props';

const PaginationButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {

  const {
    children,
    ...otherProps
  } = props;

  return (
    <Toggle ref={ref} {...otherProps}>
      {children}
    </Toggle>
  );

};

export default memo(forwardRef(PaginationButton));