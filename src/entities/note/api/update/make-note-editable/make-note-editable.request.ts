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

export type MakeNoteEditableParams = Pick<Note, 'id'>;
export type MakeNoteEditableResult = PostgrestSingleResponse<Note>['data'];
export type MakeNoteEditableError  = PostgrestError;

export async function makeNoteEditable(params: MakeNoteEditableParams): Promise<MakeNoteEditableResult> {

  const {
    id
  } = params;

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ isEditable: true })
    .eq<keyof Note>('id', id)
    .select('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}