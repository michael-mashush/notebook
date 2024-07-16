import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  StarIcon
} from 'lucide-react';

import {
  useMoveNoteToFavorites,
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

const MoveNoteToFavoritesButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    startIcon = StarIcon,
    variant   = 'outlined',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    title = 'Move note to favorites',
    'aria-label': ariaLabel = 'Move note to favorites',
    ...otherProps
  } = props;

  const moveNoteToFavorites = useMoveNoteToFavorites();
  const warningDialog       = useVisibility(moveNoteToFavorites.isError);

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: moveNoteToFavorites.isSuccess
  });

  useRefetchNote({
    note:      moveNoteToFavorites.data,
    isEnabled: moveNoteToFavorites.isSuccess
  });

  useResearchNotes({
    isEnabled: moveNoteToFavorites.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    moveNoteToFavorites.mutate({ id: noteId });
  });

  return (
    <Fragment>
      <Tooltip title={title}>
        <Button
          startIcon={startIcon}
          variant={variant}
          justify={justify}
          loading={loading || moveNoteToFavorites.isPending}
          fullWidth={fullWidth}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...otherProps}
        />
      </Tooltip>
      <WarningDialog
        title="Something went wrong"
        text={moveNoteToFavorites.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(MoveNoteToFavoritesButton);