import {
  type FunctionComponent
} from 'react';

import {
  clsx
} from 'clsx';

import Props   from './component.props';
import classes from './component.module.scss';

const AuthLayoutIntro: FunctionComponent<Props> = (props) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <div className={clsx(className, classes['auth-layout-intro'])} {...otherProps}>
      {children}
    </div>
  );

};

export default AuthLayoutIntro;