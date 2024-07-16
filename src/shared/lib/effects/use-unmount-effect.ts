import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useUnmountEffect(callback: () => void): void {

  const handleUnmount = useImmutableCallback(callback);

  React.useEffect(() => {
    return handleUnmount;
  }, [ handleUnmount ]);

}