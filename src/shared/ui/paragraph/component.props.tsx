import {
  type ComponentPropsWithoutRef,
  type CSSProperties
} from 'react';

import {
  type ParagraphAlign,
  type ParagraphColor,
  type ParagraphSize,
  type ParagraphCasing,
  type ParagraphWeight,
  type ParagraphLeading
} from './types';

interface Props extends Omit<ComponentPropsWithoutRef<'p'>, 'color'> {

  /**
   * Implementing the "text-align" property from CSS.
   *
   * @default
   *  "start"
   *
   * @example
   *  <Paragraph align="center">
   *    ...
   *  </Paragraph>
   */
  align?: ParagraphAlign;

  /**
   * Implementing the "color" property from CSS.
   *
   * @default
   *  "default"
   *
   * @example
   *  <Paragraph color="current">
   *    ...
   *  </Paragraph>
   */
  color?: ParagraphColor;

  /**
   * Implementing the "font-size" property from CSS. There
   * is no default value - the value is calculated
   * dynamically relative to the passed parameters.
   *
   * @example
   *  <Paragraph size="large">
   *    ...
   *  </Paragraph>
   */
  size?: ParagraphSize;

  /**
   * Implementing the "text-transform" property from CSS.
   *
   * @default
   *  "none"
   *
   * @example
   *  <Paragraph casing="uppercase">
   *    ...
   *  </Paragraph>
   */
  casing?: ParagraphCasing;

  /**
   * Implementing the "font-weight" property from CSS.
   *
   * @default
   *  "bold"
   *
   * @example
   *  <Paragraph weight="medium">
   *    ...
   *  </Paragraph>
   */
  weight?: ParagraphWeight;

  /**
   * Implementing the "line-height" property from CSS.
   *
   * @default
   *  "normal"
   *
   * @example
   *  <Paragraph leading="highest">
   *    ...
   *  </Paragraph>
   */
  leading?: ParagraphLeading;

  /**
   * If true, then the text will not wrap to a new line
   *
   * @default
   *  false
   *
   * @example
   *  <Paragraph nowrap>
   *    ...
   *  </Paragraph>
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
   *  <Paragraph ellipsis>
   *    ...
   *  </Paragraph>
   */
  ellipsis?: boolean;

  /**
   * If true, then the text will be displayed in monospace.
   *
   * @default
   *  false
   *
   * @example
   *  <Paragraph monospaced>
   *    ...
   *  </Paragraph>
   */
  monospaced?: boolean;

  /**
   * The maximum number of display lines that will be
   * truncated by the ellipsis character.
   *
   * @example
   *  <Paragraph maxLines={3}>
   *    ...
   *  </Paragraph>
   */
  maxLines?: CSSProperties['WebkitLineClamp'];

}

export default Props;