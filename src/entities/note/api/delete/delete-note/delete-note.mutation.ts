import {
  useMutation
} from '@tanstack/react-query';

import {
  deleteNote,
  type DeleteNoteParams,
  type DeleteNoteResult,
  type DeleteNoteError
} from './delete-note.request';

type MutationParams = DeleteNoteParams;
type MutationResult = DeleteNoteResult;
type MutationError  = DeleteNoteError;

export const DELETE_NOTE_MUTATION_KEY = 'delete-note';

export function useDeleteNote() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ DELETE_NOTE_MUTATION_KEY ],
    mutationFn:  deleteNote
  });

}