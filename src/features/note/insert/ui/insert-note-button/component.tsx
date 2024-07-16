import {
  memo,
  Fragment,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  PlusIcon
} from 'lucide-react';

import {
  useInsertNote,
  useNavigateToNote,
  useRefetchNestedNotes,
  useResearchNotes
} from 'entities/note';

import {
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Button,
  WarningDialog
} from 'shared/ui';

import Props from './component.props';

const InsertNoteButton: FunctionComponent<Props> = (props) => {

  const {
    noteParentId,
    children  = 'Create',
    startIcon = PlusIcon,
    variant   = 'primary',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    ...otherProps
  } = props;

  const insertNote    = useInsertNote();
  const warningDialog = useVisibility(insertNote.isError);

  useNavigateToNote({
    id:        insertNote.data?.id,
    isEnabled: insertNote.isSuccess
  });

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: insertNote.isSuccess
  });

  useResearchNotes({
    isEnabled: insertNote.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    insertNote.mutate({ parentId: noteParentId });
  });

  return (
    <Fragment>
      <Button
        children={children}
        startIcon={startIcon}
        fullWidth={fullWidth}
        variant={variant}
        justify={justify}
        loading={loading || insertNote.isPending}
        onClick={handleClick}
        {...otherProps}
      />
      <WarningDialog
        title="Something went wrong"
        text={insertNote.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(InsertNoteButton);