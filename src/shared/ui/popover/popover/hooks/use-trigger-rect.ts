import {
  useLayoutEffect,
  type MutableRefObject
} from 'react';

import {
  useRect
} from 'shared/lib';

export function useTriggerRect(triggerRef: MutableRefObject<HTMLElement | null>, isOpened: boolean) {

  const {
    rect,
    updateRect
  } = useRect(triggerRef);

  useLayoutEffect(() => {
    updateRect();
  }, [ isOpened, updateRect ]);

  return rect;

}