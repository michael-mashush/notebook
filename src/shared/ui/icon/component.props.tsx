import {
  type ComponentPropsWithoutRef,
  type FunctionComponent,
  type SVGProps
} from 'react';

import {
  type IconSize
} from './types';

interface Props extends Omit<ComponentPropsWithoutRef<'svg'>, 'children'> {

  /**
   * The icon displayed by the component. The icon is
   * expected to be a functional component that will
   * return an svg.
   *
   * @see
   *  - https://www.npmjs.com/package/vite-plugin-svgr
   *  - https://www.npmjs.com/package/next-plugin-svgr
   *
   * @example
   *  <Icon src={InfoIcon} />
   */
  src: FunctionComponent<SVGProps<SVGSVGElement>>;

  /**
   * The size of the icon.
   *
   * @default
   *  "large"
   *
   * @example
   *  <Icon src={InfoIcon} size="large" />
   */
  size?: IconSize;

}

export default Props;