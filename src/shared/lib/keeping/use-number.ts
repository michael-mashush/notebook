import React from 'react';

import {
  useImmutableCallback
} from '../caching';

export type UseNumberOptions = {
  max?: number;
  min?: number;
};

export function useNumber(initial: number = 0, options: UseNumberOptions = {}) {

  const {
    min = 0,
    max = 100
  } = options;

  const [ value, setValue ] = React.useState<number>(initial);

  const set = useImmutableCallback((newValue: number) => {
    setValue(newValue);
  });

  const reset = useImmutableCallback(() => {
    setValue(initial);
  });

  const increment = useImmutableCallback(() => {
    setValue((prev) => prev === max ? prev : prev + 1);
  });

  const decrement = useImmutableCallback(() => {
    setValue((prev) => prev === min ? prev : prev - 1);
  });

  return {
    value,
    set,
    reset,
    increment,
    decrement
  };

}