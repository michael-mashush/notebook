import {
  Fragment,
  type FunctionComponent
} from 'react';

import {
  SquareArrowOutUpRightIcon
} from 'lucide-react';

import {
  clsx
} from 'clsx';

import {
  DeleteNoteButton
} from 'features/note/delete';

import {
  NoteCard
} from 'entities/note';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  ButtonLink
} from 'shared/ui';

import Props   from './widget.props';
import classes from './widget.module.scss';

const FoundNotes: FunctionComponent<Props> = (props) => {

  const {
    notes,
    format
  } = props;

  const classNames = clsx(classes['found-notes'], {
    [classes[`found-notes--format-${format}`]]: format
  });

  return (
    <div className={classNames}>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          actions={(
            <Fragment>
              {note.isDeleted && (
                <DeleteNoteButton
                  noteId={note.id}
                  noteParentId={note.parentId}
                  fullWidth={format === 'grid'}
                />
              )}
              <ButtonLink
                href={`${ROUTER_CONFIG.NOTE_PAGE.PATH.replace(ROUTER_CONFIG.NOTE_PAGE.DYNAMIC_PARAMS.NOTE_ID, note.id)}`}
                startIcon={SquareArrowOutUpRightIcon}
                variant="secondary"
                fullWidth={format === 'grid'}
              >
                Open
              </ButtonLink>
            </Fragment>
          )}
        />
      ))}
    </div>
  );

};

export default FoundNotes;