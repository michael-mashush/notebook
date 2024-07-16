import {
  type DialogProps
} from 'shared/ui';

interface Props extends Omit<DialogProps, 'children'> {

  /**
   * Dialog title.
   *
   * @example
   *  <WarningDialog title="..." />
   */
  title: string;

  /**
   * Dialog text.
   *
   * @example
   *  <WarningDialog text="..." />
   */
  text: string;

}

export default Props;