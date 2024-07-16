import {
  type FunctionComponent
} from 'react';


import {
  InsertNoteButton
} from 'features/note/insert';

import {
  NavbarItem,
  NavbarList
} from 'shared/ui';

import {
  NavbarNoteItem
} from '../navbar-note-item';

import Props from './component.props';

const NavbarNoteList: FunctionComponent<Props> = (props) => {

  const {
    notes
  } = props;

  return (
    <NavbarList>
      {notes.map((note) => (
        <NavbarItem key={note.id}>
          <NavbarNoteItem note={note} />
        </NavbarItem>
      ))}
      <NavbarItem>
        <InsertNoteButton
          noteParentId={null}
          variant="ghost"
          justify="start"
          fullWidth
        />
      </NavbarItem>
    </NavbarList>
  );

};

export default NavbarNoteList;