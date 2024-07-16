import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  Paragraph
} from 'shared/ui';

import Props from './component.props';

const CardText: ForwardRefRenderFunction<HTMLParagraphElement, Props> = (props, ref) => {

  const {
    children,
    color = 'muted',
    ...otherProps
  } = props;

  return (
    <Paragraph ref={ref} color={color} {...otherProps}>
      {children}
    </Paragraph>
  );

};

export default forwardRef(CardText);