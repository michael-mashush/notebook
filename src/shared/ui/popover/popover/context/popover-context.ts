import {
  createContext,
  type MutableRefObject
} from 'react';

import {
  type PopoverPosition
} from '../types';

export type PopoverContextValue = {

  triggerRef: MutableRefObject<HTMLElement | null>;
  popoverRef: MutableRefObject<HTMLElement | null>;

  triggerRect: DOMRect;
  popoverRect: DOMRect;

  triggerId: string;
  popoverId: string;

  position: PopoverPosition;
  isOpened: boolean;

  open:   () => void;
  close:  () => void;
  toggle: () => void;

  disableClick:       boolean;
  disableHover:       boolean;
  disableFocus:       boolean;
  disableInteractive: boolean;

};

export const PopoverContext = createContext<PopoverContextValue>({} as PopoverContextValue);