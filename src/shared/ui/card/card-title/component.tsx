import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Heading
} from 'shared/ui';

import Props from './component.props';

const CardTitle: ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {

  const {
    children,
    level    = '3',
    size     = 'md',
    ellipsis = true,
    nowrap   = true,
    ...otherProps
  } = props;

  return (
    <Heading
      ref={ref}
      level={level}
      size={size}
      ellipsis={ellipsis}
      nowrap={nowrap}
      {...otherProps}
    >
      {children}
    </Heading>
  );

};

export default forwardRef(CardTitle);