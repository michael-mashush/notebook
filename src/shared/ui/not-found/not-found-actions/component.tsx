import {
  type FunctionComponent
} from 'react';

import Props   from './component.props';
import classes from './component.module.scss';

const NotFoundActions: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <div className={classes['not-found-actions']}>
      {children}
    </div>
  );

};

export default NotFoundActions;