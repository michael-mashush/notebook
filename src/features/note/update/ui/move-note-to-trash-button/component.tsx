import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  Trash2Icon
} from 'lucide-react';

import {
  useMoveNoteToTrash,
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

const MoveNoteToTrashButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    startIcon = Trash2Icon,
    variant   = 'outlined',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    title = 'Move note to trash',
    'aria-label': ariaLabel = 'Move note to trash',
    ...otherProps
  } = props;

  const moveNoteToTrash = useMoveNoteToTrash();
  const warningDialog   = useVisibility(moveNoteToTrash.isError);

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: moveNoteToTrash.isSuccess
  });

  useRefetchNote({
    note:      moveNoteToTrash.data,
    isEnabled: moveNoteToTrash.isSuccess
  });

  useResearchNotes({
    isEnabled: moveNoteToTrash.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    moveNoteToTrash.mutate({ id: noteId });
  });

  return (
    <Fragment>
      <Tooltip title={title}>
        <Button
          startIcon={startIcon}
          variant={variant}
          justify={justify}
          loading={loading || moveNoteToTrash.isPending}
          fullWidth={fullWidth}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...otherProps}
        />
      </Tooltip>
      <WarningDialog
        title="Something went wrong"
        text={moveNoteToTrash.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(MoveNoteToTrashButton);