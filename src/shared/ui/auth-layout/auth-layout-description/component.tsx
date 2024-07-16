import {
  type FunctionComponent
} from 'react';

import {
  Paragraph
} from 'shared/ui';

import Props from './component.props';

const AuthLayoutDescription: FunctionComponent<Props> = (props) => {

  const {
    children,
    align = 'center',
    color = 'muted',
    ...otherProps
  } = props;

  return (
    <Paragraph align={align} color={color} {...otherProps}>
      {children}
    </Paragraph>
  );

};

export default AuthLayoutDescription;