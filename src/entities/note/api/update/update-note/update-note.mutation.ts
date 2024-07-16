import {
  useMutation
} from '@tanstack/react-query';

import {
  updateNote,
  type UpdateNoteParams,
  type UpdateNoteResult,
  type UpdateNoteError
} from './update-note.request';

type MutationParams = UpdateNoteParams;
type MutationResult = UpdateNoteResult;
type MutationError  = UpdateNoteError;

export const UPDATE_NOTE_MUTATION_KEY = 'update-note';

export function useUpdateNote() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ UPDATE_NOTE_MUTATION_KEY ],
    mutationFn:  updateNote
  });

}