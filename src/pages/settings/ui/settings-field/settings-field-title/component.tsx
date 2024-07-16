import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Heading
} from 'shared/ui';

import Props from './component.props';

const SettingsFieldTitle: ForwardRefRenderFunction<HTMLHeadingElement, Props> = (props, ref) => {

  const {
    children,
    color = 'default',
    level = '3',
    size  = 'sm',
    weight = 'semibold',
    ...otherProps
  } = props;

  return (
    <Heading
      ref={ref}
      color={color}
      level={level}
      size={size}
      weight={weight}
      {...otherProps}
    >
      {children}
    </Heading>
  );

};

export default forwardRef(SettingsFieldTitle);