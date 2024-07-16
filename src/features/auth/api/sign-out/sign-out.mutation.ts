import {
  useMutation
} from '@tanstack/react-query';

import {
  signOut,
  type SignOutResult,
  type SignOutError
} from './sign-out.request';

type MutationResult = SignOutResult;
type MutationError  = SignOutError;

export const SIGN_OUT_MUTATION_KEY = 'sign-out';

export function useSignOut() {

  return useMutation<MutationResult, MutationError>({
    mutationKey: [ SIGN_OUT_MUTATION_KEY ],
    mutationFn:  () => signOut()
  });

}