import {
  type FunctionComponent
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const MainLayoutFooter: FunctionComponent<Props> = (props) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <div className={clsx(className, classes['main-layout-footer'])} {...otherProps}>
      {children}
    </div>
  );

};

export default MainLayoutFooter;