import {
  useMutation
} from '@tanstack/react-query';

import {
  resetPassword,
  type ResetPasswordParams,
  type ResetPasswordResult,
  type ResetPasswordError
} from './reset-password.request';

type MutationParams = ResetPasswordParams;
type MutationResult = ResetPasswordResult;
type MutationError  = ResetPasswordError;

export const RESET_PASSWORD_MUTATION_KEY = 'reset-password';

export function useResetPassword() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ RESET_PASSWORD_MUTATION_KEY ],
    mutationFn:  resetPassword
  });

}