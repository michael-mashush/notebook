import {
  memo,
  useEffect,
  Fragment,
  type FunctionComponent
} from 'react';

import {
  useSearchParams
} from 'react-router-dom';

import {
  FoundNotes
} from 'widgets/found-notes';

import {
  SearchPagination
} from 'features/note/search';

import {
  useSearchOptionsStore
} from 'features/technical/change-search-options';

import {
  useSearchDeletedNotes
} from 'entities/note';

import {
  useDebounceValue,
  useImmutableCallback
} from 'shared/lib';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  Button,
  Loader,
  NotFound,
  NotFoundActions,
  NotFoundDescription
} from 'shared/ui';

import classes from './component.module.scss';

const SearchResults: FunctionComponent = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const page = searchParams.get(ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.PAGE);
  const name = searchParams.get(ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.NAME);

  const debouncedName = useDebounceValue(name, 500);

  const searchLimit  = useSearchOptionsStore((store) => store.searchLimit);
  const searchFormat = useSearchOptionsStore((store) => store.searchFormat);

  const searchNotes = useSearchDeletedNotes({
    name:  debouncedName ?? undefined,
    page:  page ? Number(page) : undefined,
    limit: searchLimit
  });

  const notesCount  = searchNotes.data?.count ?? 0;
  const currentPage = Number(searchParams.get(ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.PAGE) ?? 1);
  const maximumPage = Math.ceil(notesCount / searchLimit);

  useEffect(() => {
    if (searchNotes.isSuccess && currentPage > maximumPage) {
      setSearchParams((previousSearchParams) => ({
        [ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.PAGE]: '1',
        [ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.NAME]: previousSearchParams.get(ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.NAME) ?? ''
      }));
    }
  }, [ currentPage, maximumPage, searchNotes.isSuccess ]);

  const handleResetSearchParams = useImmutableCallback(() => {
    setSearchParams((previousSearchParams) => ({
      ...Object.fromEntries(previousSearchParams),
      [ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.PAGE]: '1',
      [ROUTER_CONFIG.TRASH_PAGE.SEARCH_PARAMS.NAME]: ''
    }));
  });

  return (
    <div className={classes['search-results']}>
      <Loader
        visible={searchNotes.isFetching}
        position="absolute"
        description="Loading notes"
      />
      {searchNotes.isSuccess && !searchNotes.data.data?.length && (
        <NotFound>
          <NotFoundDescription>
            No deleted notes found
          </NotFoundDescription>
          <NotFoundActions>
            {debouncedName && page && (
              <NotFoundActions>
                <Button onClick={handleResetSearchParams}>
                  Clear your search and try again
                </Button>
              </NotFoundActions>
            )}
          </NotFoundActions>
        </NotFound>
      )}
      {searchNotes.isSuccess && !!searchNotes.data.data?.length && (
        <Fragment>
          <FoundNotes
            notes={searchNotes.data.data}
            format={searchFormat}
          />
          <SearchPagination
            currentPage={currentPage}
            maximumPage={maximumPage}
          />
        </Fragment>
      )}
    </div>
  );

};

export default memo(SearchResults);