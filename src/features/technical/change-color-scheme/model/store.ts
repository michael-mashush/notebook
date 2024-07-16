import {
  create
}  from 'zustand';

import {
  persist,
  type StorageValue
} from 'zustand/middleware';

import {
  LocalStorage
} from 'shared/lib';

import {
  LOCAL_STORAGE_COLOR_SCHEME_KEY
} from '../lib';

import {
  type ColorScheme
} from '../model';

export const SYSTEM_COLOR_SCHEME:  ColorScheme = 'system';
export const LIGHT_COLOR_SCHEME:   ColorScheme = 'light';
export const DARK_COLOR_SCHEME:    ColorScheme = 'dark';
export const DEFAULT_COLOR_SCHEME: ColorScheme = SYSTEM_COLOR_SCHEME;

export type ColorSchemeStore = {
  colorScheme:           ColorScheme;
  setColorScheme:        (olorScheme: ColorScheme) => void;
  setDefaultColorScheme: () => void;
  setSystemColorScheme:  () => void;
  setLightColorScheme:   () => void;
  setDarkColorScheme:    () => void;
};

export const useColorSchemeStore = create<ColorSchemeStore>()(persist((set) => {

  const storageValue = LocalStorage.get<StorageValue<Pick<ColorSchemeStore, 'colorScheme'>>>(
    LOCAL_STORAGE_COLOR_SCHEME_KEY,
    {
      state: {
        colorScheme: DEFAULT_COLOR_SCHEME
      }
    }
  );

  return {
    colorScheme:           storageValue.state.colorScheme,
    setColorScheme:        (colorScheme) => set((store) => ({ ...store, colorScheme })),
    setDefaultColorScheme: () => set((store) => ({ ...store, DEFAULT_COLOR_SCHEME })),
    setSystemColorScheme:  () => set((store) => ({ ...store, SYSTEM_COLOR_SCHEME })),
    setLightColorScheme:   () => set((store) => ({ ...store, LIGHT_COLOR_SCHEME })),
    setDarkColorScheme:    () => set((store) => ({ ...store, DARK_COLOR_SCHEME }))
  };

}, { name: LOCAL_STORAGE_COLOR_SCHEME_KEY }));