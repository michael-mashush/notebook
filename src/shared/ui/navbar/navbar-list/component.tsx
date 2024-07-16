import {
  type FunctionComponent
} from 'react';

import {
  List
} from 'shared/ui';

import Props from './component.props';

const NavbarList: FunctionComponent<Props> = (props) => {

  const {
    children,
    ...otherProps
  } = props;

  return (
    <List {...otherProps}>
      {children}
    </List>
  );

};

export default NavbarList;