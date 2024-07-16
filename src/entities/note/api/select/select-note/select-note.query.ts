import {
  useQuery,
  type UseQueryResult
} from '@tanstack/react-query';

import {
  selectNote,
  type SelectNoteParams,
  type SelectNoteResult,
  type SelectNoteError
} from './select-note.request';

type QueryParams = SelectNoteParams;
type QueryResult = SelectNoteResult;
type QueryError  = SelectNoteError;

export const SELECT_NOTE_QUERY_KEY = 'select-note';

export function useSelectNote(params: Partial<QueryParams>, enabled: boolean = true): UseQueryResult<QueryResult, QueryError> {

  return useQuery<QueryResult, QueryError>({
    queryKey: [ SELECT_NOTE_QUERY_KEY, params.id ],
    queryFn:  () => selectNote(params as QueryParams),
    enabled:  enabled && !!params.id
  });

}