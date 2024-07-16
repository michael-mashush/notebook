/*
  eslint-disable @typescript-eslint/no-explicit-any
*/

import {
  useRef
} from 'react';

import {
  useImmutableCallback
} from '../caching';

import {
  useUnmountEffect
} from '../effects';

export function useDebounceCallback<T extends(...args: any[]) => any>(callback: T, delay: number) {

  const immutableCallback = useImmutableCallback(callback);
  const timeoutRef        = useRef<number | null>(null);

  useUnmountEffect(() => {
    if (typeof timeoutRef.current === 'number') {
      window.clearTimeout(timeoutRef.current);
    }
  });

  return useImmutableCallback((...args: Parameters<T>) => {
    if (typeof timeoutRef.current === 'number') {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(immutableCallback, delay, ...args);
  });

}