import {
  FunctionComponent
} from 'react';

import {
  BrowserRouter
} from 'react-router-dom';

import Props from './component.props';

const Wrapper: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );

};

export default Wrapper;