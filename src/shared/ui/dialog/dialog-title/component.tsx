import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Heading
} from 'shared/ui';

import Props from './component.props';

const DialogTitle: ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {

  const {
    children,
    level = '2',
    color = 'default',
    size  = 'md',
    ...otherProps
  } = props;

  return (
    <Heading ref={ref} level={level} color={color} size={size} {...otherProps}>
      {children}
    </Heading>
  );

};

export default forwardRef(DialogTitle);