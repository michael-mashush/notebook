import React from 'react';

export function useIsMounted(): React.MutableRefObject<boolean> {

  const mountedRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef;

}