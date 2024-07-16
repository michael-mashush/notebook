import {
  type ReactNode
} from 'react';

import {
  type Note
} from '../../model';

interface Props {

  /**
   * Current note.
   *
   * @example
   *  <NoteCard note={note} />
   */
  note: Note;

  /**
   * Card actions.
   *
   * @example
   *  <NoteCard
   *    actions={[
   *      <button>action 1</button>
   *      <button>action 2</button>
   *    ]}
   *  />
   */
  actions: ReactNode;

}

export default Props;