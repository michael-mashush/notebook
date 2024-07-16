import {
  useState,
  type MutableRefObject
} from 'react';

import {
  useResizeObserver,
  useWindowEvent
} from '../browser';

import {
  useImmutableCallback
} from '../caching';

function getRect(element: HTMLElement | null) {

  if (!element) {
    return <DOMRect>{
      x:      0,
      y:      0,
      width:  0,
      height: 0,
      top:    0,
      right:  0,
      bottom: 0,
      left:   0,
      toJSON() {
        return this;
      }
    };
  }

  return element.getBoundingClientRect();

}

export type UseRectOptions = {
  disableWindowResize?: boolean;
  disableWindowScroll?: boolean;
};

export function useRect(ref: MutableRefObject<HTMLElement | null>, options: UseRectOptions = {}) {

  const {
    disableWindowResize = false,
    disableWindowScroll = false
  } = options;

  const [ rect, setRect ] = useState<DOMRect>(getRect(ref.current));

  const updateRect = useImmutableCallback(() => {
    const newRect     = getRect(ref.current);
    const oldRectJSON = JSON.stringify(rect);
    const newRectJSON = JSON.stringify(newRect);
    if (oldRectJSON !== newRectJSON) {
      setRect(newRect);
    }
  });

  useResizeObserver(ref, updateRect);

  useWindowEvent('resize', updateRect, { disabled: disableWindowResize });
  useWindowEvent('scroll', updateRect, { disabled: disableWindowScroll });

  return {
    rect,
    updateRect
  };

}