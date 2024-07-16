import {
  type FunctionComponent
} from 'react';

import {
  Paragraph
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const ErrorLayoutDescription: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <Paragraph className={classes['error-layout-description']} align="center" color="muted">
      {children}
    </Paragraph>
  );

};

export default ErrorLayoutDescription;