import {
  type ComponentPropsWithoutRef
} from 'react';

import {
  type SheetPosition
} from './types';

interface Props extends ComponentPropsWithoutRef<'aside'> {

  /**
   * The position of the popover.
   *
   * @default
   *  "left"
   *
   * @example
   *  <Sheet position="right">
   *    ...
   *  </Sheet>
   */
  position?: SheetPosition;

  /**
   * If true, then the dialog will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <Sheet opened>
   *    ...
   *  </Sheet>
   */
  opened?: boolean;

  /**
   * Event that fires when a dialog is closed.
   *
   * @example
   *  <Sheet onClose={handleClose}>
   *    ...
   *  </Sheet>
   */
  onClose?: () => void;

}

export default Props;