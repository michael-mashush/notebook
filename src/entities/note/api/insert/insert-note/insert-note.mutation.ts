import {
  useMutation
} from '@tanstack/react-query';

import {
  insertNote,
  type InsertNoteParams,
  type InsertNoteResult,
  type InsertNoteError
} from './insert-note.request';

type MutationParams = InsertNoteParams;
type MutationResult = InsertNoteResult;
type MutationError  = InsertNoteError;

export const INSERT_NOTE_MUTATION_KEY = 'insert-note';

export function useInsertNote() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ INSERT_NOTE_MUTATION_KEY ],
    mutationFn:  insertNote
  });

}