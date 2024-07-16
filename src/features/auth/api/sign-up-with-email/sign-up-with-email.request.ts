import {
  type AuthError,
  type AuthResponse
} from '@supabase/supabase-js';

import {
  supabase
} from 'shared/api';

export type SignUpWithEmailParams = { email: string; password: string; };
export type SignUpWithEmailResult = AuthResponse['data'];
export type SignUpWithEmailError  = AuthError;

export async function signUpWithEmail(params: SignUpWithEmailParams): Promise<SignUpWithEmailResult> {

  const {
    email,
    password
  } = params;

  const response = await supabase.auth.signUp({
    email,
    password
  });

  if (response.error) {
    throw response.error;
  }

  return response.data;

}