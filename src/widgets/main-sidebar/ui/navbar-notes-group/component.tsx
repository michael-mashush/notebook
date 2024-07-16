import {
  Fragment,
  memo,
  type FunctionComponent
} from 'react';

import {
  InsertNoteButton
} from 'features/note/insert';

import {
  useSelectNestedNotes
} from 'entities/note';

import {
  NavbarGroup,
  NavbarGroupTitle,
  NavbarGroupContent,
  Alert
} from 'shared/ui';

import {
  NavbarNoteList
} from '../navbar-note-list';

const NavbarNotesGroup: FunctionComponent = () => {

  const {
    data,
    error,
    isError,
    isSuccess
  } = useSelectNestedNotes({ parentId: null });

  return (
    <NavbarGroup>
      <NavbarGroupTitle>
        Notes
      </NavbarGroupTitle>
      <NavbarGroupContent>
        {isSuccess && !!data?.length && (
          <NavbarNoteList notes={data} />
        )}
        {isSuccess && !data?.length && (
          <Fragment>
            <Alert
              title="No notes"
              text="You haven't created any notes yet. Let's create our first note."
            />
            <InsertNoteButton
              noteParentId={null}
              fullWidth
            />
          </Fragment>
        )}
        {isError && (
          <Alert
            title="Something went wrong"
            text={error.message}
          />
        )}
      </NavbarGroupContent>
    </NavbarGroup>
  );

};

export default memo(NavbarNotesGroup);