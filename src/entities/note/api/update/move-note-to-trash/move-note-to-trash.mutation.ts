import {
  useMutation
} from '@tanstack/react-query';

import {
  moveNoteToTrash,
  type MoveNoteToTrashParams,
  type MoveNoteToTrashResult,
  type MoveNoteToTrashError
} from './move-note-to-trash.request';

type MutationParams = MoveNoteToTrashParams;
type MutationResult = MoveNoteToTrashResult;
type MutationError  = MoveNoteToTrashError;

export const MOVE_NOTE_TO_TRASH_MUTATION_KEY = 'move-note-to-trash';

export function useMoveNoteToTrash() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ MOVE_NOTE_TO_TRASH_MUTATION_KEY ],
    mutationFn:  moveNoteToTrash
  });

}