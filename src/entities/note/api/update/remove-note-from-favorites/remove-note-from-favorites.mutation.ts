import {
  useMutation
} from '@tanstack/react-query';

import {
  removeNoteToFavorites,
  type RemoveNoteToFavoritesParams,
  type RemoveNoteToFavoritesResult,
  type RemoveNoteToFavoritesError
} from './remove-note-from-favorites.request';

type MutationParams = RemoveNoteToFavoritesParams;
type MutationResult = RemoveNoteToFavoritesResult;
type MutationError  = RemoveNoteToFavoritesError;

export const REMOVE_NOTE_FROM_FAVORITES_MUTATION_KEY = 'remove-note-from-favorites';

export function useRemoveNoteFromFavorites() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ REMOVE_NOTE_FROM_FAVORITES_MUTATION_KEY ],
    mutationFn:  removeNoteToFavorites
  });

}