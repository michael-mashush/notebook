import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  HistoryIcon
} from 'lucide-react';

import {
  useRefetchNestedNotes,
  useRefetchNote,
  useRemoveNoteFromTrash,
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

const RemoveNoteFromTrashButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    startIcon = HistoryIcon,
    variant   = 'outlined',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    title = 'Remove note from trash',
    'aria-label': ariaLabel = 'Remove note from trash',
    ...otherProps
  } = props;

  const removeNoteFromTrash = useRemoveNoteFromTrash();
  const warningDialog       = useVisibility(removeNoteFromTrash.isError);

  useRefetchNestedNotes({
    parentId:  removeNoteFromTrash.data?.parentId,
    isEnabled: removeNoteFromTrash.isSuccess
  });

  useRefetchNote({
    note:      removeNoteFromTrash.data,
    isEnabled: removeNoteFromTrash.isSuccess
  });

  useResearchNotes({
    isEnabled: removeNoteFromTrash.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    removeNoteFromTrash.mutate({ id: noteId, parentId: noteParentId });
  });

  return (
    <Fragment>
      <Tooltip title={title}>
        <Button
          startIcon={startIcon}
          variant={variant}
          justify={justify}
          loading={loading || removeNoteFromTrash.isPending}
          fullWidth={fullWidth}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...otherProps}
        />
      </Tooltip>
      <WarningDialog
        title="Something went wrong"
        text={removeNoteFromTrash.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(RemoveNoteFromTrashButton);