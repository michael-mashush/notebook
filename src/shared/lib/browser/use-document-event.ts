import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export type UseDocumentEventOptions = AddEventListenerOptions & {
  disabled?: boolean;
};

export function useDocumentEvent<E extends keyof DocumentEventMap>(
  event: E,
  handler: (event: DocumentEventMap[E]) => void,
  options: UseDocumentEventOptions = {}
): void {

  const {
    disabled = false,
    ...otherOptions
  } = options;

  const handleEvent = useImmutableCallback(handler);

  React.useLayoutEffect(() => {
    if (!disabled) {
      document.addEventListener(event, handleEvent, otherOptions);
    }
    return () => {
      document.removeEventListener(event, handleEvent, otherOptions);
    };
  }, [ event, handleEvent, otherOptions, disabled ]);

}