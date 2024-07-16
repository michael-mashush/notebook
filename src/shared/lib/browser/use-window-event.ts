import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export type UseWindowEventOptions = AddEventListenerOptions & {
  disabled?: boolean;
};

export function useWindowEvent<E extends keyof WindowEventMap>(
  event: E,
  handler: (event: WindowEventMap[E]) => void,
  options: UseWindowEventOptions = {}
): void {

  const {
    disabled = false,
    ...otherOptions
  } = options;

  const handleEvent = useImmutableCallback(handler);

  React.useLayoutEffect(() => {
    if (!disabled) {
      window.addEventListener(event, handleEvent, otherOptions);
    }
    return () => {
      window.removeEventListener(event, handleEvent, otherOptions);
    };
  }, [ event, handleEvent, otherOptions, disabled ]);

}