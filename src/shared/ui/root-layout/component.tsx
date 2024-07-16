import {
  type FunctionComponent
} from 'react';

import Props   from './component.props';
import classes from './component.module.scss';

const RootLayout: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <div className={classes['root-layout']}>
      {children}
    </div>
  );

};

export default RootLayout;