import {
  type FunctionComponent
} from 'react';

import {
  Heading
} from 'shared/ui';

import Props from './component.props';

const NavbarGroupTitle: FunctionComponent<Props> = (props) => {

  const {
    children,
    size   = 'sm',
    color  = 'muted',
    level  = '5',
    weight = 'medium',
    ...otherProps
  } = props;

  return (
    <Heading size={size} color={color} level={level} weight={weight} {...otherProps}>
      {children}
    </Heading>
  );

};

export default NavbarGroupTitle;