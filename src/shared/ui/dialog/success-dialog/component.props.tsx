import {
  type DialogProps
} from 'shared/ui';

interface Props extends Omit<DialogProps, 'children'> {

  /**
   * Dialog title.
   *
   * @example
   *  <SuccessDialog title="..." />
   */
  title: string;

  /**
   * Dialog text.
   *
   * @example
   *  <SuccessDialog text="..." />
   */
  text: string;

}

export default Props;