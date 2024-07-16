import {
  type ComponentPropsWithoutRef,
  type FunctionComponent,
  type SVGProps
} from 'react';

import {
  type AlertVariant
} from './types';

interface Props extends Omit<ComponentPropsWithoutRef<'section'>, 'children'> {

  /**
   * Alert title.
   *
   * @example
   *  <Alert title="..." />
   */
  title: string;

  /**
   * Alert text.
   *
   * @example
   *  <Alert text="..." />
   */
  text: string;

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
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * The variant of the component.
   *
   * @default
   *  "outlined"
   *
   * @example
   *  <Alert variant="outlined" />
   */
  variant?: AlertVariant;

}

export default Props;