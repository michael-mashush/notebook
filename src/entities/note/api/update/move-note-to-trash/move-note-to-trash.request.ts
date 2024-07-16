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

export type MoveNoteToTrashParams = Pick<Note, 'id'>;
export type MoveNoteToTrashResult = PostgrestSingleResponse<Note>['data'];
export type MoveNoteToTrashError  = PostgrestError;

export async function moveNoteToTrash(params: MoveNoteToTrashParams): Promise<MoveNoteToTrashResult> {

  const {
    id
  } = params;

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ isDeleted: true, deletedAt: new Date() })
    .eq<keyof Note>('id', id)
    .select<'*', Note>('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  const nestedNotes = await supabase
    .from(TABLES.NOTES)
    .select<'*', Note>('*')
    .eq<keyof Note>('parentId', id);

  if (nestedNotes.error) {
    throw nestedNotes.error;
  }

  await Promise.all(nestedNotes.data.map((note) => {
    return moveNoteToTrash({ id: note.id });
  }));

  return response.data;

}