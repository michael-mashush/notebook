import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useMountEffect(callback: () => void): void {

  const handleMount = useImmutableCallback(callback);

  React.useEffect(handleMount, []);

}