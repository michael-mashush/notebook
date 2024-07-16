import {
  useMutation
} from '@tanstack/react-query';

import {
  makeNoteEditable,
  type MakeNoteEditableParams,
  type MakeNoteEditableResult,
  type MakeNoteEditableError
} from './make-note-editable.request';

type MutationParams = MakeNoteEditableParams;
type MutationResult = MakeNoteEditableResult;
type MutationError  = MakeNoteEditableError;

export const MAKE_NOTE_EDITABLE_MUTATION_KEY = 'make-note-editable';

export function useMakeNoteEditable() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ MAKE_NOTE_EDITABLE_MUTATION_KEY ],
    mutationFn:  makeNoteEditable
  });

}