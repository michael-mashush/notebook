import {
  type FunctionComponent
} from 'react';

import {
  Paragraph
} from 'shared/ui/paragraph';

import Props from './component.props';

const NotFoundDescription: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <Paragraph align="center" color="muted">
      {children}
    </Paragraph>
  );

};

export default NotFoundDescription;