import {
  useQuery,
  type UseQueryResult
} from '@tanstack/react-query';

import {
  selectNestedNotes,
  type SelectNestedNotesParams,
  type SelectNestedNotesResult,
  type SelectNestedNotesError
} from './select-nested-notes.request';

type QueryParams = SelectNestedNotesParams;
type QueryResult = SelectNestedNotesResult;
type QueryError  = SelectNestedNotesError;

export const SELECT_NESTED_NOTES_QUERY_KEY = 'select-nested-notes';

export function useSelectNestedNotes(params: Partial<QueryParams>, enabled: boolean = true): UseQueryResult<QueryResult, QueryError> {

  return useQuery<QueryResult, QueryError>({
    queryKey: [ SELECT_NESTED_NOTES_QUERY_KEY, params.parentId ],
    queryFn:  () => selectNestedNotes(params as QueryParams),
    enabled
  });

}