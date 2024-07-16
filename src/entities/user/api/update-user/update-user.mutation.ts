import {
  useMutation
} from '@tanstack/react-query';

import {
  updateUser,
  type UpdateUserParams,
  type UpdateUserResult,
  type UpdateUserError
} from './update-user.request';

type MutationParams = UpdateUserParams;
type MutationResult = UpdateUserResult;
type MutationError  = UpdateUserError;

export const UPDATE_USER_MUTATION_KEY = 'update-user';

export function useUpdateUser() {

  return useMutation<MutationResult, MutationError, MutationParams>({
    mutationKey: [ UPDATE_USER_MUTATION_KEY ],
    mutationFn:  updateUser
  });

}