import {
  type ReactNode,
  type PropsWithChildren
} from 'react';

interface Props extends PropsWithChildren {

  /**
   * A fallback element that will be displayed in case of an error.
   *
   * @example
   *  <ErrorBoundary fallback={<div>Error</div>}>
   *    ...
   *  </ErrorBoundary>
   */
  fallback: ReactNode;

}

export default Props;