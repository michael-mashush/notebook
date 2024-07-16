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
  LOCAL_STORAGE_SEARCH_OPTIONS_KEY
} from '../lib';

import {
  type SearchLimit,
  type SearchFormat
} from '../model';

export const X1_SEARCH_LIMIT: SearchLimit = 12;
export const X2_SEARCH_LIMIT: SearchLimit = 24;
export const X3_SEARCH_LIMIT: SearchLimit = 36;
export const X4_SEARCH_LIMIT: SearchLimit = 48;
export const X5_SEARCH_LIMIT: SearchLimit = 60;

export const ROWS_SEARCH_FORMAT: SearchFormat = 'rows';
export const GRID_SEARCH_FORMAT: SearchFormat = 'grid';

export const DEFAULT_SEARCH_LIMIT:  SearchLimit  = X5_SEARCH_LIMIT;
export const DEFAULT_SEARCH_FORMAT: SearchFormat = GRID_SEARCH_FORMAT;

export type SearchOptionsStore = {
  searchLimit:     SearchLimit;
  searchFormat:    SearchFormat;
  setSearchLimit:  (searchLimit: SearchLimit) => void;
  setSearchFormat: (searchFormat: SearchFormat) => void;
};

export const useSearchOptionsStore = create<SearchOptionsStore>()(persist((set) => {

  const storageValue = LocalStorage.get<StorageValue<Pick<SearchOptionsStore, 'searchLimit' | 'searchFormat'>>>(
    LOCAL_STORAGE_SEARCH_OPTIONS_KEY,
    {
      state: {
        searchLimit:  DEFAULT_SEARCH_LIMIT,
        searchFormat: DEFAULT_SEARCH_FORMAT
      }
    }
  );

  return {
    searchLimit:     storageValue.state.searchLimit,
    searchFormat:    storageValue.state.searchFormat,
    setSearchLimit:  (searchLimit) => set((store) => ({ ...store, searchLimit })),
    setSearchFormat: (searchFormat) => set((store) => ({ ...store, searchFormat }))
  };

}, { name: LOCAL_STORAGE_SEARCH_OPTIONS_KEY }));