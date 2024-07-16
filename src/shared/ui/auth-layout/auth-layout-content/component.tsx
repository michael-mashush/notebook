import {
  type FunctionComponent
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const AuthLayoutContent: FunctionComponent< Props> = (props) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <div className={clsx(className, classes['auth-layout-content'])} {...otherProps}>
      <div className={classes['auth-layout-content-center']}>
        {children}
      </div>
    </div>
  );

};

export default AuthLayoutContent;