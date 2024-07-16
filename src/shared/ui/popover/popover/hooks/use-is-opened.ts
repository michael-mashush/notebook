import {
  useEffect
} from 'react';

import {
  useToggle
} from 'shared/lib';

export type UseIsOpenedOptions = {
  onOpen?:  () => void;
  onClose?: () => void;
};

export function useIsOpened(opened: boolean, options: UseIsOpenedOptions) {

  const {
    onOpen,
    onClose
  } = options;

  const {
    isActive: isOpened,
    set: setIsOpened,
    on: open,
    off: close,
    toggle
  } = useToggle(opened);

  useEffect(() => {
    setIsOpened(opened);
  }, [ opened, setIsOpened ]);

  useEffect(() => {
    if (isOpened) {
      onOpen?.();
    } else {
      onClose?.();
    }
  }, [ isOpened, onOpen, onClose ]);

  return {
    isOpened,
    open,
    close,
    toggle
  };

}