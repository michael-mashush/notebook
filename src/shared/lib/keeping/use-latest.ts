import React from 'react';

export function useLatest<V>(value: V): React.MutableRefObject<V> {

  const latestRef = React.useRef<V>(value);

  React.useLayoutEffect(() => {
    latestRef.current = value;
  }, [ value ]);

  return latestRef;

}