import {
  type AuthError,
  type OAuthResponse
} from '@supabase/supabase-js';

import {
  supabase
} from 'shared/api';

export type SignInWithGithubResult = OAuthResponse['data'];
export type SignInWithGithubError  = AuthError;

export async function signInWithGithub(): Promise<SignInWithGithubResult> {

  const response = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options:  {
      redirectTo: 'https://michael-mashush.github.io/notebook/'
    }
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;

}