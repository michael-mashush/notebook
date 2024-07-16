import {
  type AuthError
} from '@supabase/supabase-js';

import {
  supabase
} from 'shared/api';

export type SignOutResult = void;
export type SignOutError  = AuthError;

export async function signOut(): Promise<SignOutResult> {

  const response = await supabase.auth.signOut();

  if (response.error) {
    throw response.error;
  }

}