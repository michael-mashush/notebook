import {
  forwardRef,
  memo,
  type ForwardRefRenderFunction
} from 'react';

import {
  ChevronRight
} from 'lucide-react';

import {
  Button
} from 'shared/ui';

import Props from './component.props';

const PaginationNext: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {

  const {
    variant = 'ghost',
    ...otherProps
  } = props;

  return (
    <Button
      ref={ref}
      variant={variant}
      startIcon={ChevronRight}
      {...otherProps}
    />
  );

};

export default memo(forwardRef(PaginationNext));