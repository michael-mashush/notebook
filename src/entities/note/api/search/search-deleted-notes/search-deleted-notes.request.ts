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

export type SearchDeletedNotesParams = { name: string; page: number; limit: number; };
export type SearchDeletedNotesResult = PostgrestSingleResponse<Note[]>;
export type SearchDeletedNotesError  = PostgrestError;

export async function searchDeletedNotes(params: SearchDeletedNotesParams): Promise<SearchDeletedNotesResult> {

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
    .is<keyof Note>('isDeleted', true);

  const notesRequest = supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*')
    .order<keyof Note>('deletedAt', { ascending: true })
    .ilike<keyof Note>('name', `%${name ?? ''}%`)
    .is<keyof Note>('isDeleted', true)
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