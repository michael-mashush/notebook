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

export type SelectNestedNotesParams = Pick<Note, 'parentId'>;
export type SelectNestedNotesResult = NonNullable<PostgrestSingleResponse<Note[]>['data']>;
export type SelectNestedNotesError  = PostgrestError;

export async function selectNestedNotes(params: SelectNestedNotesParams): Promise<SelectNestedNotesResult> {

  const {
    parentId
  } = params;

  const request = supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*')
    .order<keyof Note>('createdAt', { ascending: true })
    .is<keyof Note>('isDeleted', false);

  const response = parentId
    ? await request.eq<keyof Note>('parentId', parentId)
    : await request.is<keyof Note>('parentId', parentId);

  if (response.error) {
    throw response.error;
  }

  return response.data;

}