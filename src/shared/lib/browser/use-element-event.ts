import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export type UseElementEventOptions = AddEventListenerOptions & {
  disabled?: boolean;
};

export function useElementEvent<E extends keyof HTMLElementEventMap>(
  target: HTMLElement | null,
  event: E,
  handler: (event: HTMLElementEventMap[E]) => void,
  options: UseElementEventOptions = {}
): void {

  const {
    disabled = false,
    ...otherOptions
  } = options;

  const handleEvent = useImmutableCallback(handler);

  React.useLayoutEffect(() => {
    if (!target) {
      return;
    }
    if (!disabled) {
      target.addEventListener(event, handleEvent, otherOptions);
    }
    return () => {
      target.removeEventListener(event, handleEvent, otherOptions);
    };
  }, [ target, event, handleEvent, otherOptions, disabled ]);

}