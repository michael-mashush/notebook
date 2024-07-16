import {
  type Note
} from 'entities/note';

interface Props {

  /**
   * Current note.
   *
   * @example
   *  <NavbarNoteItem note={note} />
   */
  note: Note;

}

export default Props;