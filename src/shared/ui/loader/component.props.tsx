import {
  type ComponentPropsWithoutRef
} from 'react';

import {
  type LoaderPosition
} from './types';

interface Props extends Omit<ComponentPropsWithoutRef<'div'>, 'children'> {

  /**
   * The description of the loader.
   *
   * @example
   *  <Loader description="..." />
   */
  description?: string;

  /**
   * The position of the loader.
   *
   * @default
   *  "fixed"
   *
   * @example
   *  <Loader position="absolute" />
   */
  position?: LoaderPosition;

  /**
   * If true, then the loader will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <Loader visible />
   */
  visible?: boolean;

}

export default Props;