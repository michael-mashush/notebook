import {
  memo,
  Fragment,
  type FunctionComponent,
  useEffect,
  MouseEvent
} from 'react';

import {
  useQueryClient
} from '@tanstack/react-query';

import {
  Trash2Icon
} from 'lucide-react';

import {
  useDeleteNote,
  useRefetchNestedNotes,
  useResearchNotes,
  SEARCH_NOTES_QUERY_KEY,
  SEARCH_DELETED_NOTES_QUERY_KEY
} from 'entities/note';

import {
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Button,
  ConfirmDialog,
  WarningDialog
} from 'shared/ui';

import Props from './component.props';

const InsertNoteButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    children  = 'Delete',
    startIcon = Trash2Icon,
    variant   = 'secondary',
    justify   = 'center',
    loading   = false,
    fullWidth = true,
    onClick,
    ...otherProps
  } = props;

  const queryClient   = useQueryClient();
  const deleteNote    = useDeleteNote();
  const confirmDialog = useVisibility(deleteNote.isSuccess);
  const warningDialog = useVisibility(deleteNote.isError);

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: deleteNote.isSuccess
  });

  useResearchNotes({
    isEnabled: deleteNote.isSuccess
  });

  useEffect(() => {
    if (deleteNote.isSuccess) {
      queryClient.refetchQueries({ queryKey: [ SEARCH_NOTES_QUERY_KEY ] });
      queryClient.refetchQueries({ queryKey: [ SEARCH_DELETED_NOTES_QUERY_KEY ] });
    }
  }, [ deleteNote.isSuccess ]);

  const handleDeleteClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    confirmDialog.show();
  });

  const handleAcceptClick = useImmutableCallback(async () => {
    await deleteNote.mutateAsync({ id: noteId });
    confirmDialog.hide();
  });

  return (
    <Fragment>
      <Button
        children={children}
        startIcon={startIcon}
        fullWidth={fullWidth}
        variant={variant}
        justify={justify}
        loading={loading || deleteNote.isPending}
        onClick={handleDeleteClick}
        {...otherProps}
      />
      <ConfirmDialog
        title="Confirm the action"
        text="Are you sure you want to permanently delete the note? Once deleted, a note cannot be restored."
        opened={confirmDialog.isVisible}
        onClose={confirmDialog.hide}
        onCancel={confirmDialog.hide}
        onAccept={handleAcceptClick}
      />
      <WarningDialog
        title="Something went wrong"
        text={deleteNote.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(InsertNoteButton);