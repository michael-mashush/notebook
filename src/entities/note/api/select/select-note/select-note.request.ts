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

export type SelectNoteParams = Pick<Note, 'id'>;
export type SelectNoteResult = PostgrestSingleResponse<Note>['data'];
export type SelectNoteError  = PostgrestError;

export async function selectNote(params: SelectNoteParams): Promise<SelectNoteResult> {

  const {
    id
  } = params;

  const response = await supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*')
    .eq<keyof Note>('id', id)
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}