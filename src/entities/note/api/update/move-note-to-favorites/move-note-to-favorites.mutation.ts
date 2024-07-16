import {
  useMutation
} from '@tanstack/react-query';

import {
  moveNoteToFavorites,
  type MoveNoteToFavoritesParams,
  type MoveNoteToFavoritesResult,
  type MoveNoteToFavoritesError
} from './move-note-to-favorites.request';

type MutationParams = MoveNoteToFavoritesParams;
type MutationResult = MoveNoteToFavoritesResult;
type MutationError  = MoveNoteToFavoritesError;

export const MOVE_NOTE_TO_FAVORITES_MUTATION_KEY = 'move-note-to-favorites';

export function useMoveNoteToFavorites() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ MOVE_NOTE_TO_FAVORITES_MUTATION_KEY ],
    mutationFn:  moveNoteToFavorites
  });

}