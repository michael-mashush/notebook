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

export type RemoveNoteToFavoritesParams = Pick<Note, 'id'>;
export type RemoveNoteToFavoritesResult = PostgrestSingleResponse<Note>['data'];
export type RemoveNoteToFavoritesError  = PostgrestError;

export async function removeNoteToFavorites(params: RemoveNoteToFavoritesParams): Promise<RemoveNoteToFavoritesResult> {

  const {
    id
  } = params;

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ isFavorite: false })
    .eq<keyof Note>('id', id)
    .select('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}