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

export type RemoveNoteFromTrashParams = Pick<Note, 'id' | 'parentId'>;
export type RemoveNoteFromTrashResult = PostgrestSingleResponse<Note>['data'];
export type RemoveNoteFromTrashError  = PostgrestError;

export async function removeNoteFromTrash(params: RemoveNoteFromTrashParams): Promise<RemoveNoteFromTrashResult> {

  const {
    id,
    parentId
  } = params;

  const parentNote = await supabase
    .from(TABLES.NOTES)
    .select('*')
    .eq<keyof Note>('id', parentId)
    .single<Note>();

  const newParentId = parentNote.data && !parentNote.data.isDeleted ? parentId : null;

  const response = await supabase
    .from(TABLES.NOTES)
    .update<Partial<Note>>({ isDeleted: false, parentId: newParentId, deletedAt: null })
    .eq<keyof Note>('id', id)
    .select('*')
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
    return removeNoteFromTrash({ parentId: note.parentId, id: note.id });
  }));

  return response.data;

}