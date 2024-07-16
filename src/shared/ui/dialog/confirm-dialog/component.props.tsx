import {
  type DialogProps
} from 'shared/ui';

interface Props extends Omit<DialogProps, 'children'> {

  /**
   * Dialog title.
   *
   * @example
   *  <ConfirmDialog title="..." />
   */
  title: string;

  /**
   * Dialog text.
   *
   * @example
   *  <ConfirmDialog text="..." />
   */
  text: string;

  /**
   * Event that fires when a confirmation is cancelled.
   *
   * @example
   *  <ConfirmDialog onCancel={...} />
   */
  onCancel?: () => void;

  /**
   * Event that fires when a confirmation is accepted.
   *
   * @example
   *  <ConfirmDialog onAccept={...} />
   */
  onAccept?: () => void;

  /**
   * Text for the "cancel" button.
   *
   * @example
   *  <ConfirmDialog cancelText="Cancel" />
   */
  cancelText?: string;

  /**
   * Text for the "accept" button.
   *
   * @example
   *  <ConfirmDialog acceptText="Accept" />
   */
  acceptText?: string;

}

export default Props;