import {
  useEffect
} from 'react';

import {
  useQueryClient
} from '@tanstack/react-query';

import {
  SELECT_NESTED_NOTES_QUERY_KEY
} from '../api';

import {
  type Note
} from '../model';

export type UseRefetchNestedNotesParams = Partial<Pick<Note, 'parentId'>> & {
  isEnabled?: boolean;
};

export function useRefetchNestedNotes(params: UseRefetchNestedNotesParams) {

  const {
    parentId,
    isEnabled
  } = params;

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isEnabled) {
      if (parentId !== undefined) {
        queryClient.refetchQueries({
          queryKey: [
            SELECT_NESTED_NOTES_QUERY_KEY,
            parentId
          ]
        });
      }
    }
  }, [ queryClient, isEnabled, parentId ]);

}