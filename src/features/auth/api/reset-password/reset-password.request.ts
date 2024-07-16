import {
  type AuthError
} from '@supabase/supabase-js';

import {
  supabase
} from 'shared/api';

export type ResetPasswordParams = { email: string; };
export type ResetPasswordResult = void;
export type ResetPasswordError  = AuthError;

export async function resetPassword(params: ResetPasswordParams): Promise<ResetPasswordResult> {

  const {
    email
  } = params;

  const response = await supabase.auth.resetPasswordForEmail(email);

  if (response.error) {
    throw response.error;
  }

}