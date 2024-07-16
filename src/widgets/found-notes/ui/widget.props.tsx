import {
  type Note
} from 'entities/note';

import {
  type SearchFormat
} from 'features/technical/change-search-options';

interface Props {

  /**
   * The found notes.
   *
   * @example
   *  <FoundNotes notes={notes} />
   */
  notes: Note[];

  /**
   * Output format
   *
   * @example
   *  <FoundNotes format={format} />
   */
  format: SearchFormat;

}

export default Props;