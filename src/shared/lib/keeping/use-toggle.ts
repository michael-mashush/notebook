import React, {
  useEffect
} from 'react';

import {
  useImmutableCallback
} from '../caching';

export function useToggle(initial: boolean = false) {

  const [ isActive, setActive ] = React.useState<boolean>(initial);

  const set = useImmutableCallback((value: boolean) => {
    setActive(value);
  });

  const on = useImmutableCallback(() => {
    setActive(true);
  });

  const off = useImmutableCallback(() => {
    setActive(false);
  });

  const toggle = useImmutableCallback(() => {
    setActive((prev) => !prev);
  });

  useEffect(() => {
    setActive(initial);
  }, [ initial ]);

  return {
    isActive,
    set,
    on,
    off,
    toggle
  };

}