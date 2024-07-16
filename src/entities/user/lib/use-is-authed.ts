import {
  useUserStore
} from '../model';

export function useIsAuthed(): boolean {
  return !!useUserStore((store) => store.user);
}