import {
  type ComponentPropsWithoutRef,
  type FunctionComponent,
  type SVGProps
} from 'react';

import {
  type TextboxType,
  type TextboxVariant
} from './types';

type AllowedInputAttributes = Omit<ComponentPropsWithoutRef<'input'>,
  | 'accept'
  | 'alt'
  | 'checked'
  | 'children'
  | 'defaultChecked'
  | 'dirname'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'multiple'
  | 'src'
  | 'step'
  | 'type'
  | 'width'
>;

interface Props extends AllowedInputAttributes {

  /**
   * The type of the component.
   *
   * @default
   *  "text"
   *
   * @example
   *  <Textbox type="email" />
   */
  type?: TextboxType;

  /**
   * Icon placed before text content. The icon is expected
   * to be a functional component that will return an svg.
   *
   * @see
   *  - https://www.npmjs.com/package/vite-plugin-svgr
   *  - https://www.npmjs.com/package/next-plugin-svgr
   *
   * @example
   *  <Textbox startIcon={InfoIcon} />
   */
  startIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * Icon placed before text content. The icon is expected
   * to be a functional component that will return an svg.
   *
   * @see
   *  - https://www.npmjs.com/package/vite-plugin-svgr
   *  - https://www.npmjs.com/package/next-plugin-svgr
   *
   * @example
   *  <Textbox endIcon={InfoIcon} />
   */
  endIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * The variant of the component.
   *
   * @default
   *  "outlined"
   *
   * @example
   *  <Textbox variant="secondary" ... />
   */
  variant?: TextboxVariant;

  /**
   * If true, then the component becomes invalid.
   *
   * @default
   *  false
   *
   * @example
   *  <Textbox invalid ... />
   */
  invalid?: boolean;

}

export default Props;