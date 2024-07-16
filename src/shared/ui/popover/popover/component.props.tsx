import {
  type PropsWithChildren
} from 'react';

import {
  type PopoverPosition
} from './types';

interface Props extends PropsWithChildren {

  /**
   * The position of the popover.
   *
   * @default
   *  "bottom-center"
   *
   * @example
   *  <Popover position="right-center">
   *    ...
   *  </Popover>
   */
  position?: PopoverPosition;

  /**
   * If true, then the popover will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <Popover opened>
   *    ...
   *  </Popover>
   */
  opened?: boolean;

  /**
   * Ddon't handle click event.
   *
   * @default
   *  false
   *
   * @example
   *  <Popover disableClick>
   *    ...
   *  </Popover>
   */
  disableClick?: boolean;

  /**
   * Ddon't handle hover event.
   *
   * @default
   *  false
   *
   * @example
   *  <Popover disableHover>
   *    ...
   *  </Popover>
   */
  disableHover?: boolean;

  /**
   * Ddon't handle focus event.
   *
   * @default
   *  false
   *
   * @example
   *  <Popover disableFocus>
   *...
   *  </Popover>
   */
  disableFocus?: boolean;

  /**
   * Make a component non-interactive.
   *
   * @default
   *  false
   *
   * @example
   *  <Popover disableInteractive>
   *    ...
   *  </Popover>
   */
  disableInteractive?: boolean;

  /**
   * Event that fires when a popover is opened.
   *
   * @example
   *  <Popover onOpen={handleOpen}>
   *    ...
   *  </Popover>
   */
  onOpen?: () => void;

  /**
   * Event that fires when a popover is closed.
   *
   * @example
   *  <Popover onClose={handleClose}>
   *    ...
   *  </Popover>
   */
  onClose?: () => void;

}

export default Props;