import {
  type PostgrestError,
  type PostgrestSingleResponse
} from '@supabase/supabase-js';

import {
  type Content
} from '@tiptap/react';

import {
  supabase,
  TABLES
} from 'shared/api';

import {
  extractNameFromJSON
} from '../../../lib';

import {
  type Note
} from '../../../model';

export type InsertNoteParams = Pick<Note, 'parentId'>;
export type InsertNoteResult = PostgrestSingleResponse<Note>['data'];
export type InsertNoteError  = PostgrestError;

export async function insertNote(params: InsertNoteParams): Promise<InsertNoteResult> {

  const {
    parentId
  } = params;

  const json = JSON.stringify(<Content>{
    type:    'doc',
    content: [
      {
        type:  'heading',
        attrs: {
          level:     1,
          textAlign: 'left'
        }
      }
    ]
  });

  const name = extractNameFromJSON(json);

  const response = await supabase
    .from(TABLES.NOTES)
    .insert<Partial<Note>>({ parentId, json, name })
    .select('*')
    .single<Note>();

  if (response.error) {
    throw response.error;
  }

  return response.data;

}