import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useRemountEffect(callback: () => void, dependencies: React.DependencyList): void {

  const isFirstRenderRef = React.useRef(true);
  const handleRemount    = useImmutableCallback(callback);

  React.useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    handleRemount();
  }, [ handleRemount, isFirstRenderRef, ...dependencies ]);

}