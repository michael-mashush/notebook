import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  StarOffIcon
} from 'lucide-react';

import {
  useRefetchNestedNotes,
  useRefetchNote,
  useRemoveNoteFromFavorites,
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

const RemoveNoteFromFavoritesButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    startIcon = StarOffIcon,
    variant   = 'outlined',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    title = 'Remove note from favorites',
    'aria-label': ariaLabel = 'Remove note from favorites',
    ...otherProps
  } = props;

  const removeNoteFromFavorites = useRemoveNoteFromFavorites();
  const warningDialog           = useVisibility(removeNoteFromFavorites.isError);

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: removeNoteFromFavorites.isSuccess
  });

  useRefetchNote({
    note:      removeNoteFromFavorites.data,
    isEnabled: removeNoteFromFavorites.isSuccess
  });

  useResearchNotes({
    isEnabled: removeNoteFromFavorites.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    removeNoteFromFavorites.mutate({ id: noteId });
  });

  return (
    <Fragment>
      <Tooltip title={title}>
        <Button
          startIcon={startIcon}
          variant={variant}
          justify={justify}
          loading={loading || removeNoteFromFavorites.isPending}
          fullWidth={fullWidth}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...otherProps}
        />
      </Tooltip>
      <WarningDialog
        title="Something went wrong"
        text={removeNoteFromFavorites.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(RemoveNoteFromFavoritesButton);