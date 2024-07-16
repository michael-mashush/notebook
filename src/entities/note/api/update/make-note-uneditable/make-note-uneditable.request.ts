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

export type MakeNoteUneditableParams = Pick<Note, 'id'>;
export type MakeNoteUneditableResult = PostgrestSingleResponse<Note>['data'];
export type MakeNoteUneditableError  = PostgrestError;

export async function makeNoteUneditable(params: MakeNoteUneditableParams): Promise<MakeNoteUneditableResult> {

  const {
    id
  } = params;

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ isEditable: false })
    .eq<keyof Note>('id', id)
    .select('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}