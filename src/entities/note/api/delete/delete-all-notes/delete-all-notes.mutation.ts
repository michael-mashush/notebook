import {
  useMutation
} from '@tanstack/react-query';

import {
  deleteAllNotes,
  type DeleteAllNotesParams,
  type DeleteAllNotesResult,
  type DeleteAllNotesError
} from './delete-all-notes.request';

type MutationParams = DeleteAllNotesParams;
type MutationResult = DeleteAllNotesResult;
type MutationError  = DeleteAllNotesError;

export const DELETE_ALL_NOTES_MUTATION_KEY = 'delete-all-notes';

export function useDeleteAllNotes() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ DELETE_ALL_NOTES_MUTATION_KEY ],
    mutationFn:  deleteAllNotes
  });

}