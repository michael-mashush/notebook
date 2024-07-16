import {
  type PopoverPosition
} from '../../popover/types';

import {
  getFormattedRect
} from './get-formatted-rect';

export type GetPopoverPositionParams = {
  triggerRect: DOMRect;
  popoverRect: DOMRect;
  position:    PopoverPosition;
};

const SAFE_PADDING = 4;

export function getPopoverPosition(params: GetPopoverPositionParams): PopoverPosition {

  const {
    triggerRect,
    popoverRect,
    position
  } = params;

  const triggerInfo = getFormattedRect(triggerRect);
  const popoverInfo = getFormattedRect(popoverRect);

  // is it possible to place a popover on top of a trigger?

  const enoughSpaceToPlaceOnTop            = triggerInfo.top                           - popoverInfo.height    > SAFE_PADDING * 2;
  const enoughSpaceToPlaceOnTopStart       = triggerInfo.right + triggerInfo.width     - popoverInfo.width     > SAFE_PADDING;
  const enoughSpaceToPlaceOnTopEnd         = triggerInfo.left  + triggerInfo.width     - popoverInfo.width     > SAFE_PADDING;
  const enoughSpaceToPlaceOnTopStartCenter = triggerInfo.left  + triggerInfo.halfWidth - popoverInfo.halfWidth > SAFE_PADDING;
  const enoughSpaceToPlaceOnTopEndCenter   = triggerInfo.right + triggerInfo.halfWidth - popoverInfo.halfWidth > SAFE_PADDING;

  const canPlacePopoverOnTopStart  = enoughSpaceToPlaceOnTop && enoughSpaceToPlaceOnTopStart;
  const canPlacePopoverOnTopCenter = enoughSpaceToPlaceOnTop && enoughSpaceToPlaceOnTopStartCenter && enoughSpaceToPlaceOnTopEndCenter;
  const canPlacePopoverOnTopEnd    = enoughSpaceToPlaceOnTop && enoughSpaceToPlaceOnTopEnd;

  // is it possible to place a popover on left of a trigger?

  const enoughSpaceToPlaceOnLeft            = triggerInfo.left                            - popoverInfo.width      > SAFE_PADDING * 2;
  const enoughSpaceToPlaceOnLeftStart       = triggerInfo.bottom + triggerInfo.height     - popoverInfo.height     > SAFE_PADDING;
  const enoughSpaceToPlaceOnLeftEnd         = triggerInfo.top    + triggerInfo.height     - popoverInfo.height     > SAFE_PADDING;
  const enoughSpaceToPlaceOnLeftStateCenter = triggerInfo.bottom + triggerInfo.halfHeight - popoverInfo.halfHeight > SAFE_PADDING;
  const enoughSpaceToPlaceOnLeftEndCenter   = triggerInfo.top    + triggerInfo.halfHeight - popoverInfo.halfHeight > SAFE_PADDING;

  const canPlacePopoverOnLeftStart  = enoughSpaceToPlaceOnLeft && enoughSpaceToPlaceOnLeftStart;
  const canPlacePopoverOnLeftCenter = enoughSpaceToPlaceOnLeft && enoughSpaceToPlaceOnLeftStateCenter && enoughSpaceToPlaceOnLeftEndCenter;
  const canPlacePopoverOnLeftEnd    = enoughSpaceToPlaceOnLeft && enoughSpaceToPlaceOnLeftEnd;

  // is it possible to place a popover on right of a trigger?

  const enoughSpaceToPlaceOnRight            = triggerInfo.right                           - popoverInfo.width      > SAFE_PADDING * 2;
  const enoughSpaceToPlaceOnRightStart       = triggerInfo.bottom + triggerInfo.height     - popoverInfo.height     > SAFE_PADDING;
  const enoughSpaceToPlaceOnRightEnd         = triggerInfo.top    + triggerInfo.height     - popoverInfo.height     > SAFE_PADDING;
  const enoughSpaceToPlaceOnRightStartCenter = triggerInfo.bottom + triggerInfo.halfHeight - popoverInfo.halfHeight > SAFE_PADDING;
  const enoughSpaceToPlaceOnRightEndCenter   = triggerInfo.top    + triggerInfo.halfHeight - popoverInfo.halfHeight > SAFE_PADDING;

  const canPlacePopoverOnRightStart  = enoughSpaceToPlaceOnRight && enoughSpaceToPlaceOnRightStart;
  const canPlacePopoverOnRightCenter = enoughSpaceToPlaceOnRight && enoughSpaceToPlaceOnRightStartCenter && enoughSpaceToPlaceOnRightEndCenter;
  const canPlacePopoverOnRightEnd    = enoughSpaceToPlaceOnRight && enoughSpaceToPlaceOnRightEnd;

  // is it possible to place a popover on bottom of a trigger?

  const enoughSpaceToPlaceOnBottom            = triggerInfo.bottom                        - popoverInfo.height    > SAFE_PADDING * 2;
  const enoughSpaceToPlaceOnBottomStart       = triggerInfo.right + triggerInfo.width     - popoverInfo.width     > SAFE_PADDING;
  const enoughSpaceToPlaceOnBottomEnd         = triggerInfo.left  + triggerInfo.width     - popoverInfo.width     > SAFE_PADDING;
  const enoughSpaceToPlaceOnBottomStartCenter = triggerInfo.left  + triggerInfo.halfWidth - popoverInfo.halfWidth > SAFE_PADDING;
  const enoughSpaceToPlaceOnBottomEndCenter   = triggerInfo.right + triggerInfo.halfWidth - popoverInfo.halfWidth > SAFE_PADDING;

  const canPlacePopoverOnBottomStart  = enoughSpaceToPlaceOnBottom && enoughSpaceToPlaceOnBottomStart;
  const canPlacePopoverOnBottomCenter = enoughSpaceToPlaceOnBottom && enoughSpaceToPlaceOnBottomStartCenter && enoughSpaceToPlaceOnBottomEndCenter;
  const canPlacePopoverOnBottomEnd    = enoughSpaceToPlaceOnBottom && enoughSpaceToPlaceOnBottomEnd;

  if (position === 'top-start') {

    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

  }

  if (position === 'top-center') {

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

  }

  if (position === 'top-end') {

    if (canPlacePopoverOnTopEnd)    return 'top-end';
    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';

    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';
    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

  }

  if (position === 'left-start') {

    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

  }

  if (position === 'left-center') {

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

  }

  if (position === 'left-end') {

    if (canPlacePopoverOnLeftEnd)    return 'left-end';
    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';

    if (canPlacePopoverOnRightEnd)    return 'right-end';
    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

  }

  if (position === 'right-start') {

    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

  }

  if (position === 'right-center') {

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

  }

  if (position === 'right-end') {

    if (canPlacePopoverOnRightEnd)    return 'right-end';
    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';

    if (canPlacePopoverOnLeftEnd)    return 'left-end';
    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

  }

  if (position === 'bottom-start') {

    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

  }

  if (position === 'bottom-center') {

    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';
    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';

    if (canPlacePopoverOnTopCenter) return 'top-center';
    if (canPlacePopoverOnTopStart)  return 'top-start';
    if (canPlacePopoverOnTopEnd)    return 'top-end';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

  }

  if (position === 'bottom-end') {

    if (canPlacePopoverOnBottomEnd)    return 'bottom-end';
    if (canPlacePopoverOnBottomCenter) return 'bottom-center';
    if (canPlacePopoverOnBottomStart)  return 'bottom-start';

    if (canPlacePopoverOnTopEnd)    return 'bottom-end';
    if (canPlacePopoverOnTopCenter) return 'bottom-center';
    if (canPlacePopoverOnTopStart)  return 'bottom-start';

    if (canPlacePopoverOnLeftCenter) return 'left-center';
    if (canPlacePopoverOnLeftStart)  return 'left-start';
    if (canPlacePopoverOnLeftEnd)    return 'left-end';

    if (canPlacePopoverOnRightCenter) return 'right-center';
    if (canPlacePopoverOnRightStart)  return 'right-start';
    if (canPlacePopoverOnRightEnd)    return 'right-end';

  }

  return position;

}