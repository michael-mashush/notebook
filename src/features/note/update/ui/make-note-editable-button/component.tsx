import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  PenIcon
} from 'lucide-react';

import {
  useMakeNoteEditable,
  useRefetchNestedNotes,
  useRefetchNote,
  useResearchNotes
} from 'entities/note';

import {
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Button,
  Tooltip,
  WarningDialog
} from 'shared/ui';

import Props from './component.props';

const MakeNoteEditableButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    startIcon = PenIcon,
    variant   = 'outlined',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    title     = 'Set editable',
    'aria-label': ariaLabel = 'Set editable',
    ...otherProps
  } = props;

  const makeNoteEditable = useMakeNoteEditable();
  const warningDialog    = useVisibility(makeNoteEditable.isError);

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: makeNoteEditable.isSuccess
  });

  useRefetchNote({
    note:      makeNoteEditable.data,
    isEnabled: makeNoteEditable.isSuccess
  });

  useResearchNotes({
    isEnabled: makeNoteEditable.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    makeNoteEditable.mutate({ id: noteId });
  });

  return (
    <Fragment>
      <Tooltip title={title}>
        <Button
          startIcon={startIcon}
          variant={variant}
          justify={justify}
          loading={loading || makeNoteEditable.isPending}
          fullWidth={fullWidth}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...otherProps}
        />
      </Tooltip>
      <WarningDialog
        title="Something went wrong"
        text={makeNoteEditable.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(MakeNoteEditableButton);