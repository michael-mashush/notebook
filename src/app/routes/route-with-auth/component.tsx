import {
  type FunctionComponent
} from 'react';

import {
  Navigate,
  Outlet,
  useLocation
} from 'react-router-dom';

import {
  useIsAuthed
} from 'entities/user';

import {
  ROUTER_CONFIG
} from 'shared/router';

const RouteWithAuth: FunctionComponent = () => {

  const isAuthed = useIsAuthed();

  const {
    pathname,
    search
  } = useLocation();

  if (isAuthed) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={ROUTER_CONFIG.SIGN_IN_PAGE.PATH}
      state={{ from: `${pathname}${search}` }}
      replace
    />
  );

};

export default RouteWithAuth;