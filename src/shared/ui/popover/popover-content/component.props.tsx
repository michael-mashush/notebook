import {
  type ReactNode
} from 'react';

import {
  type HTMLMotionProps,
  type MotionProps
} from 'framer-motion';

interface Props extends Omit<HTMLMotionProps<'div'>, keyof MotionProps> {

  /**
   * The children of the component.
   *
   * @example
   *  <PopoverContent>
   *    ...
   *  </PopoverContent>
   */
  children?: ReactNode;

  /**
   * If true, the popover-content will be stretched to
   * the full width of the popover-trigger.
   *
   * @default
   *  false
   *
   * @example
   *  <PopoverContent triggerWidth>
   *    ...
   *  </PopoverContent>
   */
  triggerWidth?: boolean;

}

export default Props;