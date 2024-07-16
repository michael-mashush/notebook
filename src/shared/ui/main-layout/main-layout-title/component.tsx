import {
  type FunctionComponent
} from 'react';

import {
  Heading
} from 'shared/ui';

import Props from './component.props';

const MainLayoutTitle: FunctionComponent<Props> = (props) => {

  const {
    children,
    ...otherProps
  } = props;

  return (
    <Heading {...otherProps}>
      {children}
    </Heading>
  );

};

export default MainLayoutTitle;