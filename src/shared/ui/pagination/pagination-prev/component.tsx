import {
  forwardRef,
  memo,
  type ForwardRefRenderFunction
} from 'react';

import {
  ChevronLeft
} from 'lucide-react';

import {
  Button
} from 'shared/ui';

import Props from './component.props';

const PaginationPrev: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {

  const {
    variant = 'ghost',
    ...otherProps
  } = props;

  return (
    <Button
      ref={ref}
      variant={variant}
      startIcon={ChevronLeft}
      {...otherProps}
    />
  );

};

export default memo(forwardRef(PaginationPrev));