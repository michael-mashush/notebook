import {
  type FunctionComponent
} from 'react';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import Props from './component.props';

const ReactQueryProvider: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        networkMode: 'online',
        retry:       0,
        retryDelay:  0
      },
      queries: {
        networkMode:                 'online',
        retry:                       0,
        retryDelay:                  0,
        retryOnMount:                false,
        refetchOnMount:              false,
        refetchInterval:             false,
        refetchIntervalInBackground: false,
        refetchOnReconnect:          false,
        refetchOnWindowFocus:        false
      }
    }
  });

  return (
    <QueryClientProvider
      children={children}
      client={queryClient}
    />
  );

};

export default ReactQueryProvider;