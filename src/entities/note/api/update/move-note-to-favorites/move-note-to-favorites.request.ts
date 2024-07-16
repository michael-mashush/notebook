import {
  type PostgrestError,
  type PostgrestSingleResponse
} from '@supabase/supabase-js';

import {
  supabase,
  TABLES
} from 'shared/api';

import {
  type Note
} from '../../../model';

export type MoveNoteToFavoritesParams = Pick<Note, 'id'>;
export type MoveNoteToFavoritesResult = PostgrestSingleResponse<Note>['data'];
export type MoveNoteToFavoritesError  = PostgrestError;

export async function moveNoteToFavorites(params: MoveNoteToFavoritesParams): Promise<MoveNoteToFavoritesResult> {

  const {
    id
  } = params;

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ isFavorite: true })
    .eq<keyof Note>('id', id)
    .select('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}