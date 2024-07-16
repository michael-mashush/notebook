import {
  create
} from 'zustand';

import type {
  User
} from './types';

export type UserStore = {
  user:       User | null;
  insertUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: () => void;
};

export const useUserStore = create<UserStore>((set) => {

  return {
    user:       null,
    insertUser: (user) => set((store) => ({ ...store, user })),
    updateUser: (user) => set((store) => {
      return JSON.stringify(store.user) === JSON.stringify(user)
        ? store
        : { ...store, user };
    }),
    deleteUser: () => set((store) => ({ ...store, user: null }))
  };

});