import {
  useMutation
} from '@tanstack/react-query';

import {
  signInWithEmail,
  type SignInWithEmailParams,
  type SignInWithEmailResult,
  type SignInWithEmailError
} from './sign-in-with-email.request';

type MutationParams = SignInWithEmailParams;
type MutationResult = SignInWithEmailResult;
type MutationError  = SignInWithEmailError;

export const SIGN_IN_WITH_EMAIL_MUTATION_KEY = 'sign-in-with-email';

export function useSignInWithEmail() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ SIGN_IN_WITH_EMAIL_MUTATION_KEY ],
    mutationFn:  signInWithEmail
  });

}