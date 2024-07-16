import {
  useToggle,
  useRemountEffect
} from 'shared/lib';

export type useIsOpenedOptions = {
  onOpen?:  () => void;
  onClose?: () => void;
};

export type UseIsOpenedResult = {
  isOpened: boolean;
  open:     () => void;
  close:    () => void;
  toggle:   () => void;
};

export function useIsOpened(externalOpened: boolean, options: useIsOpenedOptions): UseIsOpenedResult {

  const {
    onOpen,
    onClose
  } = options;

  const {
    isActive: isOpened,
    on: open,
    off: close,
    toggle
  } = useToggle(externalOpened);

  useRemountEffect(() => {
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