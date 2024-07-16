import {
  type FunctionComponent
} from 'react';

import {
  ListItem
} from 'shared/ui';

import Props from './component.props';

const NavbarItem: FunctionComponent<Props> = (props) => {

  const {
    children,
    ...otherProps
  } = props;

  return (
    <ListItem {...otherProps}>
      {children}
    </ListItem>
  );

};

export default NavbarItem;