import {
  type FunctionComponent
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const Navbar: FunctionComponent<Props> = (props) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <nav className={clsx(className, classes['navbar'])} {...otherProps}>
      {children}
    </nav>
  );

};

export default Navbar;