import {
  type FunctionComponent
} from 'react';

import {
  ErrorLayout,
  ErrorLayoutDescription
} from 'shared/ui';

const GlobalErrorFallback: FunctionComponent = () => {

  return (
    <ErrorLayout>
      <ErrorLayoutDescription>
        Something went wrong.
        Please try reloading the page.
      </ErrorLayoutDescription>
    </ErrorLayout>
  );

};

export default GlobalErrorFallback;