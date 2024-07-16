import {
  type PopoverPosition
} from '../../popover/types';

export type GetPopoverCoordinatesResult = {
  x: number;
  y: number;
};

export function getPopoverCoordinates(triggerRect: DOMRect, position: PopoverPosition): GetPopoverCoordinatesResult {

  if (position === 'top-start') {
    return {
      x: triggerRect.left,
      y: triggerRect.top
    };
  }

  if (position === 'top-center') {
    return {
      x: triggerRect.left + (triggerRect.width / 2),
      y: triggerRect.top
    };
  }

  if (position === 'top-end') {
    return {
      x: triggerRect.right,
      y: triggerRect.top
    };
  }

  if (position === 'right-start') {
    return {
      x: triggerRect.right,
      y: triggerRect.top
    };
  }

  if (position === 'right-center') {
    return {
      x: triggerRect.right,
      y: triggerRect.top + (triggerRect.height / 2)
    };
  }

  if (position === 'right-end') {
    return {
      x: triggerRect.right,
      y: triggerRect.bottom
    };
  }

  if (position === 'bottom-start') {
    return {
      x: triggerRect.left,
      y: triggerRect.bottom
    };
  }

  if (position === 'bottom-center') {
    return {
      x: triggerRect.left + (triggerRect.width / 2),
      y: triggerRect.bottom
    };
  }

  if (position === 'bottom-end') {
    return {
      x: triggerRect.right,
      y: triggerRect.bottom
    };
  }

  if (position === 'left-start') {
    return {
      x: triggerRect.left,
      y: triggerRect.top
    };
  }

  if (position === 'left-center') {
    return {
      x: triggerRect.left,
      y: triggerRect.top + (triggerRect.height / 2)
    };
  }

  if (position === 'left-end') {
    return {
      x: triggerRect.left,
      y: triggerRect.bottom
    };
  }

  return {
    x: 0,
    y: 0
  };

}