import {
  Fragment,
  type FunctionComponent
} from 'react';

import {
  AuthChangeListener
} from 'features/auth';

import {
  ColorSchemeChangeListener
} from 'features/technical/change-color-scheme';

export function withProcesses(App: FunctionComponent) {

  const ExtendedApp: FunctionComponent = () => {
    return (
      <Fragment>
        <AuthChangeListener />
        <ColorSchemeChangeListener />
        <App />
      </Fragment>
    );
  };

  return ExtendedApp;

}