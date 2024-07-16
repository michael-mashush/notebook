import {
  type FunctionComponent
} from 'react';

import {
  Heading
} from 'shared/ui';

import Props from './component.props';

const AuthLayoutTitle: FunctionComponent<Props> = (props) => {

  const {
    children,
    align = 'center',
    size  = 'xl',
    ...otherProps
  } = props;

  return (
    <Heading align={align} size={size} {...otherProps}>
      {children}
    </Heading>
  );

};

export default AuthLayoutTitle;