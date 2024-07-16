import {
  useState,
  useLayoutEffect
} from 'react';

import {
  type PopoverPosition
} from '../../popover/types';

import {
  getPopoverPosition
} from '../utils';

export type UseCorrectPositionParams = {
  triggerRect: DOMRect;
  popoverRect: DOMRect;
  position:    PopoverPosition;
};

export function useCorrectPosition(params: UseCorrectPositionParams): PopoverPosition {

  const {
    popoverRect,
    triggerRect,
    position
  } = params;

  const [ currentPosition, setCurrentPosition ] = useState<PopoverPosition>(position);

  useLayoutEffect(() => {
    if (popoverRect.width && popoverRect.height) {
      setCurrentPosition(getPopoverPosition({
        triggerRect,
        popoverRect,
        position
      }));
    }
  }, [ setCurrentPosition, position, triggerRect, popoverRect ]);

  return currentPosition;

}