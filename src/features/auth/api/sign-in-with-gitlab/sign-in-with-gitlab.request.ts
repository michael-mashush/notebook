import {
  type AuthError,
  type OAuthResponse
} from '@supabase/supabase-js';

import {
  supabase
} from 'shared/api';

export type SignInWithGitlabResult = OAuthResponse['data'];
export type SignInWithGitlabError  = AuthError;

export async function signInWithGitlab(): Promise<SignInWithGitlabResult> {

  const response = await supabase.auth.signInWithOAuth({
    provider: 'gitlab',
    options:  {
      redirectTo: 'https://michael-mashush.github.io/notebook/'
    }
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;

}