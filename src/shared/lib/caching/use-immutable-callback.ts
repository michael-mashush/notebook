/*
  eslint-disable @typescript-eslint/no-explicit-any
*/
import React from 'react';

import {
  useLatest
} from '../keeping/use-latest';

export function useImmutableCallback<A extends any[], R>(callback: (...args: A) => R): (...args: A) => R {

  const callbackRef = useLatest(callback);

  const immutableCallback = React.useCallback((...args: A) => {
    return callbackRef.current.apply(null, args);
  }, [ callbackRef ]);

  return immutableCallback;

}