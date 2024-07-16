import {
  type FunctionComponent
} from 'react';

import {
  FolderIcon,
  FolderOpenIcon
} from 'lucide-react';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import {
  InsertNoteButton
} from 'features/note/insert';

import {
  useSelectNestedNotes
} from 'entities/note';

import {
  useToggle
} from 'shared/lib';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  List,
  ListItem,
  Separator,
  Toggle,
  NavbarLink,
  Tooltip
} from 'shared/ui';

import {
  ANIMATION_TRANSITION,
  ANIMATION_INITIAL,
  ANIMATION_ANIMATE,
  ANIMATION_EXIT
} from './constants';

import Props   from './component.props';
import classes from './component.module.scss';

const NavbarNoteItem: FunctionComponent<Props> = (props) => {

  const {
    note
  } = props;

  const {
    isActive,
    toggle
  } = useToggle();

  const selectNestedNotes = useSelectNestedNotes({ parentId: note.id }, isActive);

  return (
    <div className={classes['navbar-note-item']}>
      <div className={classes['navbar-note-controls']}>
        <Tooltip title={isActive ? 'Collapse' : 'Expand'}>
          <Toggle
            startIcon={isActive ? FolderOpenIcon : FolderIcon}
            selected={isActive}
            loading={selectNestedNotes.isLoading}
            onClick={toggle}
            aria-label={isActive ? 'Collapse' : 'Expand'}
          />
        </Tooltip>
        <Separator
          orientation="vertical"
          padding="sm"
        />
        <Tooltip title={note.name || 'Untitled'}>
          <NavbarLink href={ROUTER_CONFIG.NOTE_PAGE.PATH.replace(ROUTER_CONFIG.NOTE_PAGE.DYNAMIC_PARAMS.NOTE_ID, note.id)}>
            {note.name || 'Untitled'}
          </NavbarLink>
        </Tooltip>
      </div>
      <AnimatePresence initial={false}>
        {
          isActive && selectNestedNotes.isSuccess && (
            <motion.div
              className={classes['navbar-note-collapsible']}
              transition={ANIMATION_TRANSITION}
              initial={ANIMATION_INITIAL}
              animate={ANIMATION_ANIMATE}
              exit={ANIMATION_EXIT}
            >
              <List>
                {selectNestedNotes.data.map((nestedNote) => (
                  <ListItem key={nestedNote.id}>
                    <NavbarNoteItem note={nestedNote} />
                  </ListItem>
                ))}
                <ListItem>
                  <InsertNoteButton
                    noteParentId={note.id}
                    variant="ghost"
                    justify="start"
                    fullWidth
                  />
                </ListItem>
              </List>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );

};

export default NavbarNoteItem;