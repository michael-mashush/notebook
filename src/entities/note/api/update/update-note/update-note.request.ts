import {
  type PostgrestError,
  type PostgrestSingleResponse
} from '@supabase/supabase-js';

import {
  extractNameFromJSON
} from 'entities/note';

import {
  supabase,
  TABLES
} from 'shared/api';

import {
  type Note
} from '../../../model';

export type UpdateNoteParams = Pick<Note, 'id' | 'json'>;
export type UpdateNoteResult = PostgrestSingleResponse<Note>['data'];
export type UpdateNoteError  = PostgrestError;

export async function updateNote(params: UpdateNoteParams): Promise<UpdateNoteResult> {

  const {
    id,
    json
  } = params;

  const name = extractNameFromJSON(json);

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ json, name, updatedAt: new Date() })
    .eq<keyof Note>('id', id)
    .select('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}