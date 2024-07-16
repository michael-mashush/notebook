import React from 'react';

export function useLockedBody(initialLocked: boolean) {

  const [ isLocked, setIsLocked ] = React.useState<boolean>(initialLocked);

  const lock = React.useCallback(() => {
    setIsLocked(true);
  }, []);

  const unlock = React.useCallback(() => {
    setIsLocked(false);
  }, []);

  React.useEffect(() => {
    setIsLocked(initialLocked);
  }, [ initialLocked ]);

  React.useEffect(() => {
    if (!isLocked) {
      return;
    }

    const originalBodyOverflow       = document.body.style.overflow;
    const originalBodyScrollbarWidth = window.innerWidth - document.body.offsetWidth;

    document.body.style.overflow     = 'hidden';
    document.body.style.paddingRight = `${originalBodyScrollbarWidth}px`;

    return () => {
      document.body.style.overflow     = originalBodyOverflow;
      document.body.style.paddingRight = '';
    };
  }, [ isLocked ]);

  return {
    isLocked,
    lock,
    unlock
  };

}