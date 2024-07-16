import {
  create
} from 'zustand';

import {
  devtools
} from 'zustand/middleware';

export type MenuStore = {
  isOpened: boolean;
  open:     () => void;
  close:    () => void;
  toggle:   () => void;
};

export const useMenuStore = create<MenuStore>()(devtools((set) => {

  return {
    isOpened: false,
    open:     () => set((store) => ({ ...store, isOpened: true })),
    close:    () => set((store) => ({ ...store, isOpened: false })),
    toggle:   () => set((store) => ({ ...store, isOpened: !store.isOpened }))
  };

}));