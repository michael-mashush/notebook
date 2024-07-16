import {
  useMutation
} from '@tanstack/react-query';

import {
  signInWithGitlab,
  type SignInWithGitlabResult,
  type SignInWithGitlabError
} from './sign-in-with-gitlab.request';

type MutationResult = SignInWithGitlabResult;
type MutationError  = SignInWithGitlabError;

export const SIGN_IN_WITH_GITLAB_MUTATION_KEY = 'sign-in-with-gitlab';

export function useSignInWithGitlab() {

  return useMutation<MutationResult, MutationError>({
    mutationKey: [ SIGN_IN_WITH_GITLAB_MUTATION_KEY ],
    mutationFn:  signInWithGitlab
  });

}