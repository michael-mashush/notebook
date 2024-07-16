import {
  type ComponentPropsWithoutRef,
  type CSSProperties
} from 'react';

import {
  type HeadingAlign,
  type HeadingColor,
  type HeadingLevel,
  type HeadingSize,
  type HeadingCasing,
  type HeadingWeight,
  type HeadingLeading
} from './types';

interface Props extends Omit<ComponentPropsWithoutRef<'h1'>, 'color'> {

  /**
   * Implementing the "text-align" property from CSS.
   *
   * @default
   *  "start"
   *
   * @example
   *  <Heading align="center">
   *    ...
   *  </Heading>
   */
  align?: HeadingAlign;

  /**
   * Implementing the "color" property from CSS.
   *
   * @default
   *  "default"
   *
   * @example
   *  <Heading color="current">
   *    ...
   *  </Heading>
   */
  color?: HeadingColor;

  /**
   * The level of the heading.
   *
   * @default
   *  "1"
   *
   * @example
   *  <Heading level="6">
   *    ...
   *  </Heading>
   */
  level?: HeadingLevel;

  /**
   * Implementing the "font-size" property from CSS. There
   * is no default value - the value is calculated
   * dynamically relative to the passed parameters.
   *
   * @example
   *  <Heading size="large">
   *    ...
   *  </Heading>
   */
  size?: HeadingSize;

  /**
   * Implementing the "text-transform" property from CSS.
   *
   * @default
   *  "none"
   *
   * @example
   *  <Heading casing="uppercase">
   *    ...
   *  </Heading>
   */
  casing?: HeadingCasing;

  /**
   * Implementing the "font-weight" property from CSS.
   *
   * @default
   *  "bold"
   *
   * @example
   *  <Heading weight="medium">
   *    ...
   *  </Heading>
   */
  weight?: HeadingWeight;

  /**
   * Implementing the "line-height" property from CSS.
   *
   * @default
   *  "normal"
   *
   * @example
   *  <Heading leading="highest">
   *    ...
   *  </Heading>
   */
  leading?: HeadingLeading;

  /**
   * If true, then the text will not wrap to a new line
   *
   * @default
   *  false
   *
   * @example
   *  <Heading nowrap>
   *    ...
   *  </Heading>
   */
  nowrap?: boolean;

  /**
   * If true, then the text will be cut off with an ellipsis
   * symbol when there is not enough space for it.
   *
   * @default
   *  false
   *
   * @example
   *  <Heading ellipsis>
   *    ...
   *  </Heading>
   */
  ellipsis?: boolean;

  /**
   * If true, then the text will be displayed in monospace.
   *
   * @default
   *  false
   *
   * @example
   *  <Heading monospaced>
   *    ...
   *  </Heading>
   */
  monospaced?: boolean;

  /**
   * The maximum number of display lines that will be
   * truncated by the ellipsis character.
   *
   * @example
   *  <Heading maxLines={3}>
   *    ...
   *  </Heading>
   */
  maxLines?: CSSProperties['WebkitLineClamp'];

}

export default Props;