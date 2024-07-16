import {
  useMutation
} from '@tanstack/react-query';

import {
  signInWithGithub,
  type SignInWithGithubResult,
  type SignInWithGithubError
} from './sign-in-with-github.request';

type MutationResult = SignInWithGithubResult;
type MutationError  = SignInWithGithubError;

export const SIGN_IN_WITH_GITHUB_MUTATION_KEY = 'sign-in-with-github';

export function useSignInWithGithub() {

  return useMutation<MutationResult, MutationError>({
    mutationKey: [ SIGN_IN_WITH_GITHUB_MUTATION_KEY ],
    mutationFn:  signInWithGithub
  });

}