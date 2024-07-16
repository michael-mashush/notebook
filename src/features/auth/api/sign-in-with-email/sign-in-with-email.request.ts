import {
  type AuthError,
  type AuthTokenResponsePassword
} from '@supabase/supabase-js';

import {
  supabase
} from 'shared/api';

export type SignInWithEmailParams = { email: string; password: string; };
export type SignInWithEmailResult = AuthTokenResponsePassword['data'];
export type SignInWithEmailError  = AuthError;

export async function signInWithEmail(params: SignInWithEmailParams): Promise<SignInWithEmailResult> {

  const {
    email,
    password
  } = params;

  const response = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;

}