import {
  useMutation
} from '@tanstack/react-query';

import {
  makeNoteUneditable,
  type MakeNoteUneditableParams,
  type MakeNoteUneditableResult,
  type MakeNoteUneditableError
} from './make-note-uneditable.request';

type MutationParams = MakeNoteUneditableParams;
type MutationResult = MakeNoteUneditableResult;
type MutationError  = MakeNoteUneditableError;

export const MAKE_NOTE_UNEDITABLE_MUTATION_KEY = 'make-note-uneditable';

export function useMakeNoteUneditable() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ MAKE_NOTE_UNEDITABLE_MUTATION_KEY ],
    mutationFn:  makeNoteUneditable
  });

}