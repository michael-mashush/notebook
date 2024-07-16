import {
  type FunctionComponent
} from 'react';

import {
  ReactQueryProvider
} from '../providers/react-query-provider';

import {
  ReactRouterProvider
} from '../providers/react-router-provider';

export function withProviders(App: FunctionComponent) {

  const ExtendedApp: FunctionComponent = () => {
    return (
      <ReactQueryProvider>
        <ReactRouterProvider>
          <App />
        </ReactRouterProvider>
      </ReactQueryProvider>
    );
  };

  return ExtendedApp;

}