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

const SuccessDialog: FunctionComponent<Props> = (props) => {

  const {
    title,
    text,
    onClose,
    role = 'alertdialog',
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
        <Button onClick={onClose}>
          OK
        </Button>
      </DialogFooter>
    </Dialog>
  );

};

export default SuccessDialog;