import {
  useToggle
} from './use-toggle';

export function useVisibility(initial: boolean = false) {

  const {
    isActive: isVisible,
    set: setVisible,
    on: show,
    off: hide,
    toggle
  } = useToggle(initial);

  return {
    isVisible,
    setVisible,
    show,
    hide,
    toggle
  };

}