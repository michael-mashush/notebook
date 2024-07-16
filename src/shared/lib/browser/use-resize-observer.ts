import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useResizeObserver(
  ref: React.MutableRefObject<HTMLElement | null>,
  onResize: (entry: ResizeObserverEntry) => void,
  box: ResizeObserverOptions['box'] = 'content-box'
): void {

  const handleResize = useImmutableCallback(onResize);

  React.useLayoutEffect(() => {

    if (!ref.current) {
      return;
    }
    if (!window.ResizeObserver) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(handleResize);
    });

    resizeObserver.observe(ref.current, {
      box
    });

    return () => {
      resizeObserver.disconnect();
    };

  }, [ ref, box, handleResize ]);

}