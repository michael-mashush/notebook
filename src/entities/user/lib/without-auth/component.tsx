import {
  type FunctionComponent
} from 'react';

import {
  useIsAuthed
} from '../use-is-authed';

import Props from './component.props';

const WithoutAuth: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  const isAuthed = useIsAuthed();

  if (!isAuthed) {
    return children;
  }

};

export default WithoutAuth;