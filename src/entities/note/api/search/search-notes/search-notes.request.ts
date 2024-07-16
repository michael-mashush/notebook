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

export type SearchNotesParams = { name: string; page: number; limit: number; };
export type SearchNotesResult = PostgrestSingleResponse<Note[]>;
export type SearchNotesError  = PostgrestError;

export async function searchNotes(params: SearchNotesParams): Promise<SearchNotesResult> {

  const {
    page,
    name,
    limit
  } = params;

  const skip = limit * (page - 1);

  const countRequest = supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*', { count: 'exact', head: true })
    .ilike<keyof Note>('name', `%${name ?? ''}%`)
    .is<keyof Note>('isDeleted', false);

  const notesRequest = supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*')
    .order<keyof Note>('createdAt', { ascending: true })
    .ilike<keyof Note>('name', `%${name ?? ''}%`)
    .is<keyof Note>('isDeleted', false)
    .range(skip, skip + limit - 1);

  const response = await Promise.all([
    countRequest,
    notesRequest
  ]);

  if (response[0].error) throw response[0].error;
  if (response[1].error) throw response[1].error;

  return {
    ...response[1],
    count: response[0].count
  };

}