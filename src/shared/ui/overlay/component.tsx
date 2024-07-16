import {
  type FunctionComponent
} from 'react';

import {
  createPortal
} from 'react-dom';

import Props from './component.props';

const Overlay: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  return createPortal(
    children,
    document.getElementById('root-overlay')!
  );

};

export default Overlay;