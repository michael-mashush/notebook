import {
  type ComponentPropsWithoutRef
} from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {

  /**
   * If true, the dialog-content will be bordered.
   *
   * @default
   *  false
   *
   * @example
   *  <DialogContent bordered>
   *    ...
   *  </DialogContent>
   */
  bordered?: boolean;

}

export default Props;