import {
  type FunctionComponent
} from 'react';

import Image   from './component.image.svg?react';
import Props   from './component.props';
import classes from './component.module.scss';

const ErrorLayout: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <section className={classes['error-layout']}>
      <div className={classes['error-layout-image']}>
        <Image />
      </div>
      {children}
    </section>
  );

};

export default ErrorLayout;