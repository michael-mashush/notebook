import {
  type ComponentPropsWithoutRef
} from 'react';

import {
  type ListDirection,
  type ListJustify,
  type ListAlign,
  type ListGap
} from './types';

interface Props extends ComponentPropsWithoutRef<'ul'> {

  /**
   * Implementing the "flex-direction" property from CSS.
   *
   * @default
   *  "column"
   *
   * @example
   *  <List direction="row">
   *    ...
   *  </List>
   */
  direction?: ListDirection;

  /**
   * Implementing the "justify-content" property from CSS.
   *
   * @default
   *  "start"
   *
   * @example
   *  <List justify="center">
   *    ...
   *  </List>
   */
  justify?: ListJustify;

  /**
   * Implementing the "align-items" property from CSS.
   *
   * @default
   *  "center"
   *
   * @example
   *  <List align="start">
   *    ...
   *  </List>
   */
  align?: ListAlign;

  /**
   * Implementing the "gap" property from CSS.
   *
   * @default
   *  "xs"
   *
   * @example
   *  <List gap="sm">
   *    ...
   *  </List>
   */
  gap?: ListGap;

}

export default Props;