import {
  type HTMLMotionProps,
  type MotionProps
} from 'framer-motion';

type AllowedDivProps = Omit<HTMLMotionProps<'div'>, keyof MotionProps>;

interface Props extends AllowedDivProps {

  /**
   * If true, then the backdrop will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <Backdrop opened />
   */
  opened?: boolean;

  /**
   * If true, then the backdrop will be blurred.
   *
   * @default
   *  false
   *
   * @example
   *  <Backdrop blurred />
   */
  blurred?: boolean;

  /**
   * If true, then the backdrop will be invisible.
   *
   * @default
   *  false
   * @example
   *  <Backdrop invisible />
   */
  invisible?: boolean;

}

export default Props;