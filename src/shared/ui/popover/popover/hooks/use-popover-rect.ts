import {
  useLayoutEffect,
  type MutableRefObject
} from 'react';

import {
  useRect
} from 'shared/lib';

export function usePopoverRect(popoverRef: MutableRefObject<HTMLElement | null>, isOpened: boolean) {

  const {
    rect,
    updateRect
  } = useRect(popoverRef, {
    disableWindowResize: !isOpened,
    disableWindowScroll: !isOpened
  });

  useLayoutEffect(() => {
    updateRect();
  }, [ isOpened, updateRect ]);

  return rect;

}