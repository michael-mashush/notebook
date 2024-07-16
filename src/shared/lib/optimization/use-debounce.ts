/*
  eslint-disable @typescript-eslint/no-explicit-any
*/

import {
  useEffect,
  useRef,
  type DependencyList
} from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useDebounce<T extends(...args: any[]) => any>(callback: T, delay: number, ...deps: DependencyList) {

  const immutableCallback = useImmutableCallback(callback);
  const timeoutRef        = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(immutableCallback, delay);
    return () => {
      if (typeof timeoutRef.current === 'number') {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [ delay, ...deps ]);

}