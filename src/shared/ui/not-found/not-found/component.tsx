import {
  type FunctionComponent
} from 'react';

import Image   from './component.image.svg?react';
import Props   from './component.props';
import classes from './component.module.scss';

const NotFound: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <section className={classes['not-found']}>
      <div className={classes['not-found-image']}>
        <Image />
      </div>
      {children}
    </section>
  );

};

export default NotFound;