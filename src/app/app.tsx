import {
  type FunctionComponent
} from 'react';

import {
  Outlet
} from 'react-router-dom';

import {
  MainSidebar
} from 'widgets/main-sidebar';

import {
  WithAuth
} from 'entities/user';

import {
  RootLayout
} from 'shared/ui';

import './styles/reset.css';
import './styles/fonts.css';
import './styles/const.css';
import './styles/basic.css';

import {
  withProcesses,
  withProviders
} from './extends';

const App: FunctionComponent = () => {

  return (
    <RootLayout>
      <WithAuth>
        <MainSidebar />
      </WithAuth>
      <Outlet />
    </RootLayout>
  );

};

export default withProcesses(withProviders(App));