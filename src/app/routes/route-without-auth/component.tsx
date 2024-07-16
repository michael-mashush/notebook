import {
  type FunctionComponent
} from 'react';

import {
  Navigate,
  Outlet
} from 'react-router-dom';

import {
  useIsAuthed
} from 'entities/user';

import {
  ROUTER_CONFIG
} from 'shared/router';

const RouteWithoutAuth: FunctionComponent = () => {

  const isAuthed = useIsAuthed();

  if (!isAuthed) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={ROUTER_CONFIG.HOME_PAGE.PATH}
      replace
    />
  );

};

export default RouteWithoutAuth;