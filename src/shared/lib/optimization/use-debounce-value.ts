import {
  useEffect,
  useRef,
  useState
} from 'react';

import {
  useIsMounted
} from '../effects';

export function useDebounceValue<T>(value: T, delay: number) {

  const [ debouncedValue, setDebouncedValue ] = useState(value);

  const isMounted  = useIsMounted();
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isMounted) {
      timeoutRef.current = window.setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [ value, delay ]);

  return debouncedValue;

}