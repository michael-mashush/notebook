import {
  useQuery,
  type UseQueryResult
} from '@tanstack/react-query';

import {
  searchDeletedNotes,
  type SearchDeletedNotesParams,
  type SearchDeletedNotesResult,
  type SearchDeletedNotesError
} from './search-deleted-notes.request';

type QueryParams = SearchDeletedNotesParams;
type QueryResult = SearchDeletedNotesResult;
type QueryError  = SearchDeletedNotesError;

export const SEARCH_DELETED_NOTES_QUERY_KEY = 'search-deleted-notes';

export function useSearchDeletedNotes(params: Partial<QueryParams>): UseQueryResult<QueryResult, QueryError> {

  return useQuery<QueryResult, QueryError>({
    queryKey: [ SEARCH_DELETED_NOTES_QUERY_KEY, params.page, params.name, params.limit ],
    queryFn:  () => searchDeletedNotes(params as QueryParams),
    enabled:  typeof params.page === 'number' && typeof params.name === 'string',
    gcTime:   0
  });

}