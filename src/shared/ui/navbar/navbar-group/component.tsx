import {
  type FunctionComponent
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const NavbarGroup: FunctionComponent<Props> = (props) => {

  const {
    children,
    className,
    role = 'group',
    ...otherProps
  } = props;

  return (
    <div className={clsx(className, classes['navbar-group'])} role={role} {...otherProps}>
      {children}
    </div>
  );

};

export default NavbarGroup;