import {
  useQuery,
  type UseQueryResult
} from '@tanstack/react-query';

import {
  searchNotes,
  type SearchNotesParams,
  type SearchNotesResult,
  type SearchNotesError
} from './search-notes.request';

type QueryParams = SearchNotesParams;
type QueryResult = SearchNotesResult;
type QueryError  = SearchNotesError;

export const SEARCH_NOTES_QUERY_KEY = 'search-notes';

export function useSearchNotes(params: Partial<QueryParams>): UseQueryResult<QueryResult, QueryError> {

  return useQuery<QueryResult, QueryError>({
    queryKey: [ SEARCH_NOTES_QUERY_KEY, params.page, params.name, params.limit ],
    queryFn:  () => searchNotes(params as QueryParams),
    enabled:  typeof params.page === 'number' && typeof params.name === 'string',
    gcTime:   0
  });

}