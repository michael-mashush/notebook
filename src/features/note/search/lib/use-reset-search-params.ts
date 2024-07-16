import {
  useSearchParams
} from 'react-router-dom';

import {
  useMountEffect
} from 'shared/lib';

import {
  ROUTER_CONFIG
} from 'shared/router';

export function useResetSearchParams() {

  const [ searchParams, setSearchParams ] = useSearchParams();

  useMountEffect(() => {
    setSearchParams({
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.PAGE]: searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.PAGE) ?? '1',
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME]: searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME) ?? ''
    });
  });

}