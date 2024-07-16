import {
  useMutation
} from '@tanstack/react-query';

import {
  signUpWithEmail,
  type SignUpWithEmailParams,
  type SignUpWithEmailResult,
  type SignUpWithEmailError
} from './sign-up-with-email.request';

type MutationParams = SignUpWithEmailParams;
type MutationResult = SignUpWithEmailResult;
type MutationError  = SignUpWithEmailError;

export const SIGN_UP_WITH_EMAIL_MUTATION_KEY = 'sign-up-with-email';

export function useSignUpWithEmail() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ SIGN_UP_WITH_EMAIL_MUTATION_KEY ],
    mutationFn:  signUpWithEmail
  });

}