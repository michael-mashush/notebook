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

export type DeleteAllNotesParams = never;
export type DeleteAllNotesResult = PostgrestSingleResponse<Note>['data'];
export type DeleteAllNotesError  = PostgrestError;

export async function deleteAllNotes(): Promise<DeleteAllNotesResult> {

  const currUser = await supabase.auth.getUser();
  const response = await supabase
    .from(TABLES.NOTES)
    .delete()
    .eq<keyof Note>('authorId', currUser.data.user?.id);

  if (response.error) {
    throw response.error;
  }

  return response.data;

}