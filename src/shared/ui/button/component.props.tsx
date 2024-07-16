import {
  type ComponentPropsWithoutRef,
  type FunctionComponent,
  type SVGProps
} from 'react';

import {
  type ButtonVariant,
  type ButtonJustify,
  type ButtonSize
} from './types';

interface Props extends ComponentPropsWithoutRef<'button'> {

  /**
   * The text content.
   *
   * @example
   *  <Button>
   *    ...
   *  </Button>
   */
  children?: string | number;

  /**
   * Icon placed before text content. The icon is expected
   * to be a functional component that will return an svg.
   *
   * @see
   *  - https://www.npmjs.com/package/vite-plugin-svgr
   *  - https://www.npmjs.com/package/next-plugin-svgr
   *
   * @example
   *  <Button startIcon={InfoIcon}>
   *    ...
   *  </Button>
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
   *  <Button endIcon={InfoIcon}>
   *    ...
   *  </Button>
   */
  endIcon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * The variant of the component.
   *
   * @default
   *  "primary"
   *
   * @example
   *  <Button variant="outlined">
   *    ...
   *  </Button>
   */
  variant?: ButtonVariant;

  /**
   * The justify of the component.
   *
   * @default
   *  "center"
   *
   * @example
   *  <Button justify="start">
   *    ...
   *  </Button>
   */
  justify?: ButtonJustify;

  /**
   * The size of the component.
   *
   * @default
   *  "medium"
   *
   * @example
   *  <Button size="large">
   *    ...
   *  </Button>
   */
  size?: ButtonSize;

  /**
   * If true, then the component is in the disabled state
   * and the loader will be displayed instead of the
   * content.
   *
   * @default
   *  false
   *
   * @example
   *  <Button loading>
   *    ...
   *  </Button>
   */
  loading?: boolean;

  /**
   * If true, then, ignoring the content, the component
   * will set a fixed width for displaying the icon.
   * By default, this property automatically adjusts
   * to the values passed to it.
   *
   * @default
   *  false
   *
   * @example
   *  <Button onlyIcon>
   *    ...
   *  </Button>
   */
  onlyIcon?: boolean;

  /**
   * If true, the component will try to occupy the entire
   * width of its parent element.
   *
   * @default
   *  false
   *
   * @example
   *  <Button fullWidth>
   *    ...
   *  </Button>
   */
  fullWidth?: boolean;

}

export default Props;