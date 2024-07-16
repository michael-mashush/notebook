import {
  type FunctionComponent
} from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogText,
  DialogTitle
} from 'shared/ui';

import Props from './component.props';

const ConfirmDialog: FunctionComponent<Props> = (props) => {

  const {
    title,
    text,
    acceptText = 'Accept',
    cancelText = 'Cancel',
    role = 'dialog',
    onClose,
    onAccept,
    onCancel,
    ...otherProps
  } = props;

  return (
    <Dialog role={role} onClose={onClose} {...otherProps}>
      <DialogHeader>
        <DialogTitle>
          {title}
        </DialogTitle>
      </DialogHeader>
      <DialogContent>
        <DialogText>
          {text}
        </DialogText>
      </DialogContent>
      <DialogFooter>
        <Button variant="secondary" onClick={onCancel}>
          {cancelText}
        </Button>
        <Button variant="primary" onClick={onAccept}>
          {acceptText}
        </Button>
      </DialogFooter>
    </Dialog>
  );

};

export default ConfirmDialog;