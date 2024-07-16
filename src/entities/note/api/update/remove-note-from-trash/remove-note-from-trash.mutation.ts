import {
  useMutation
} from '@tanstack/react-query';

import {
  removeNoteFromTrash,
  type RemoveNoteFromTrashParams,
  type RemoveNoteFromTrashResult,
  type RemoveNoteFromTrashError
} from './remove-note-from-trash.request';

type MutationParams = RemoveNoteFromTrashParams;
type MutationResult = RemoveNoteFromTrashResult;
type MutationError  = RemoveNoteFromTrashError;

export const REMOVE_NOTE_FROM_TRASH_MUTATION_KEY = 'remove-note-from-trash';

export function useRemoveNoteFromTrash() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ REMOVE_NOTE_FROM_TRASH_MUTATION_KEY ],
    mutationFn:  removeNoteFromTrash
  });

}