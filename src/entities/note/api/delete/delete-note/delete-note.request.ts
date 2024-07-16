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

export type DeleteNoteParams = Pick<Note, 'id'>;
export type DeleteNoteResult = PostgrestSingleResponse<Note>['data'];
export type DeleteNoteError  = PostgrestError;

export async function deleteNote(params: DeleteNoteParams): Promise<DeleteNoteResult> {

  const {
    id
  } = params;

  // Find and delete current note
  const deleteResponse = await supabase
    .from(TABLES.NOTES)
    .delete()
    .eq<keyof Note>('id', id)
    .single<Note>();

  if (deleteResponse.error) {
    throw deleteResponse.error;
  }

  // Find nested notes
  const selectResponse = await supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*')
    .eq<keyof Note>('parentId', id);

  if (selectResponse.error) {
    throw selectResponse.error;
  }

  // Delete nested notes
  await Promise.all(selectResponse.data.map((note) => {
    return deleteNote({ id: note.id });
  }));

  return deleteResponse.data;

}