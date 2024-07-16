import {
  Fragment,
  memo,
  type FunctionComponent
} from 'react';

import {
  MakeNoteEditableButton,
  MakeNoteUneditableButton,
  MoveNoteToFavoritesButton,
  MoveNoteToTrashButton,
  RemoveNoteFromFavoritesButton,
  RemoveNoteFromTrashButton
} from 'features/note/update';

import {
  BurgerButton
} from 'features/technical/toggle-menu';

import {
  Header,
  HeaderContent,
  Logotype
} from 'shared/ui';

import Props from './component.props';

const NoteHeader: FunctionComponent<Props> = (props) => {

  const {
    id,
    parentId,
    isFavorite,
    isEditable,
    isDeleted
  } = props;

  return (
    <Header>
      <HeaderContent>
        <BurgerButton />
        <Logotype />
      </HeaderContent>
      <HeaderContent>
        {!isDeleted && (
          <Fragment>
            {isFavorite
              ? <RemoveNoteFromFavoritesButton noteId={id} noteParentId={parentId} />
              : <MoveNoteToFavoritesButton noteId={id} noteParentId={parentId} />}
            {isEditable
              ? <MakeNoteUneditableButton noteId={id} noteParentId={parentId} />
              : <MakeNoteEditableButton noteId={id} noteParentId={parentId} />}
          </Fragment>
        )}
        {isDeleted
          ? <RemoveNoteFromTrashButton noteId={id} noteParentId={parentId} />
          : <MoveNoteToTrashButton noteId={id} noteParentId={parentId} />}
      </HeaderContent>
    </Header>
  );

};

export default memo(NoteHeader);