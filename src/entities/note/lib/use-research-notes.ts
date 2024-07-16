import {
  useEffect
} from 'react';

import {
  useQueryClient
} from '@tanstack/react-query';

import {
  SEARCH_NOTES_QUERY_KEY
} from '../api';

export type UseResearchNotesParams = {
  isEnabled?: boolean;
};

export function useResearchNotes(params: UseResearchNotesParams) {

  const {
    isEnabled
  } = params;

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isEnabled) {
      queryClient.refetchQueries({
        queryKey: [ SEARCH_NOTES_QUERY_KEY ]
      });
    }
  }, [ isEnabled ]);

}