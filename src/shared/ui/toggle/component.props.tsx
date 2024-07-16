import {
  type ButtonProps
} from '..';

interface Props extends Omit<ButtonProps, 'variant'> {

  /**
   * The default variant to use.
   *
   * @default
   *  "plain"
   *
   * @example
   *  <Toggle defaultVariant="plain">
   *    ...
   *  </Toggle>
   *
   */
  defaultVariant?: ButtonProps['variant'];

  /**
   * The selected variant to use.
   *
   * @default
   *  "tonal"
   *
   * @example
   *  <Toggle selectedVariant="tonal">
   *    ...
   *  </Toggle>
   */
  selectedVariant?: ButtonProps['variant'];

  /**
   * If true, the button switches from the default variant
   * to the selected variant.
   *
   * @default
   *  false
   *
   * @example
   *  <Toggle selected>
   *    ...
   *  </Toggle>
   */
  selected?: boolean;

}

export default Props;