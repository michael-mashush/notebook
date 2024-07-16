import {
  type HTMLMotionProps,
  type MotionProps
} from 'framer-motion';

interface Props extends Omit<HTMLMotionProps<'section'>, keyof Omit<MotionProps, 'children'>> {

  /**
   * If true, then the dialog will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <Dialog opened>
   *    ...
   *  </Dialog>
   */
  opened?: boolean;

  /**
   * Event that fires when a dialog is closed.
   *
   * @example
   *  <Dialog onClose={handleClose}>
   *    ...
   *  </Dialog>
   */
  onClose?: () => void;

}

export default Props;