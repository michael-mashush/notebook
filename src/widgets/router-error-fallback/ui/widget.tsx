/*
  eslint-disable
    no-console
*/

import {
  useEffect,
  type FunctionComponent
} from 'react';

import {
  useRouteError
} from 'react-router-dom';

import {
  ErrorLayout,
  ErrorLayoutDescription
} from 'shared/ui';

const RouterErrorFallback: FunctionComponent = () => {

  const error = useRouteError();

  useEffect(() => {
    console.group('error');
    console.error(error);
    console.groupEnd();
  }, [ error ]);

  return (
    <ErrorLayout>
      <ErrorLayoutDescription>
        Something went wrong.
        Please try reloading the page.
      </ErrorLayoutDescription>
    </ErrorLayout>
  );

};

export default RouterErrorFallback;