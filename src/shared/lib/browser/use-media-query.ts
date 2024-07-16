import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useMediaQuery(query: string): boolean {

  const [ matched, setMatched ] = React.useState<boolean>(false);

  const changeHandler = useImmutableCallback((event: MediaQueryListEvent) => {
    setMatched(event.matches);
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatched(mediaQuery.matches);

    mediaQuery.addListener
      ? mediaQuery.addListener(changeHandler)
      : mediaQuery.addEventListener('change', changeHandler);

    return () => {
      mediaQuery.removeListener
        ? mediaQuery.removeListener(changeHandler)
        : mediaQuery.removeEventListener('change', changeHandler);
    };
  }, [ query, changeHandler ]);

  return matched;

}