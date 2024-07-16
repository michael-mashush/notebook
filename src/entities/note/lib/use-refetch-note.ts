import {
  useEffect
} from 'react';

import {
  useQueryClient
} from '@tanstack/react-query';

import {
  SELECT_NOTE_QUERY_KEY
} from '../api';

import {
  type Note
} from '../model';

export type UseRefetchNoteParams = {
  note?:      Note | null;
  isEnabled?: boolean;
};

export function useRefetchNote(params: UseRefetchNoteParams) {

  const {
    note,
    isEnabled
  } = params;

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isEnabled) {
      if (note) {
        queryClient.setQueryData(
          [
            SELECT_NOTE_QUERY_KEY,
            note.id
          ],
          note
        );
      }
    }
  }, [ queryClient, isEnabled, note?.id ]);

}