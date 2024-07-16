import {
  type ComponentPropsWithoutRef
} from 'react';

import {
  type SeparatorGap,
  type SeparatorOrientation,
  type SeparatorPadding
} from './types';

interface Props extends ComponentPropsWithoutRef<'div'> {

  /**
   * The orientation of the separator.
   *
   * @default
   *  "horizontal"
   *
   * @example
   *  <Separator orientation="horizontal" />
   */
  orientation?: SeparatorOrientation;

  /**
   * Implementing the "padding" property from CSS.
   *
   * @example
   *  <Separator padding="sm" />
   */
  padding?: SeparatorPadding;

  /**
   * Implementing the "gap" property from CSS.
   *
   * @default
   *  "2xl"
   *
   * @example
   *  <Separator gap="sm" />
   */
  gap?: SeparatorGap;

}

export default Props;