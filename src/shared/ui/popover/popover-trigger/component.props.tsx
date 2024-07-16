import {
  type ReactElement,
  type HTMLAttributes,
  type ForwardedRef
} from 'react';

interface Props {

  /**
   * The children of the component.
   *
   * @example
   *  <PopoverTrigger>
   *    ...
   *  </PopoverTrigger>
   */
  children: ReactElement<HTMLAttributes<HTMLElement>> & { ref?: ForwardedRef<HTMLElement>; };

}

export default Props;