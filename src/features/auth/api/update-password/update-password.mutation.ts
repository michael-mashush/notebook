import {
  useMutation
} from '@tanstack/react-query';

import {
  updatePassword,
  type UpdatePasswordParams,
  type UpdatePasswordResult,
  type UpdatePasswordError
} from './update-password.request';

type MutationParams = UpdatePasswordParams;
type MutationResult = UpdatePasswordResult;
type MutationError  = UpdatePasswordError;

export const UPDATE_PASSWORD_MUTATION_KEY = 'update-password';

export function useUpdatePassword() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ UPDATE_PASSWORD_MUTATION_KEY ],
    mutationFn:  updatePassword
  });

}