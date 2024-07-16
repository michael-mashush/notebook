import {
  type Note
} from 'entities/note';

interface Props {

  /**
   * Current notes.
   *
   * @example
   *  <NavbarNoteList notes={notes} />
   */
  notes: Note[];

}

export default Props;