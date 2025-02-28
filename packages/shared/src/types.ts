import type { CookieSerializeOptions } from 'cookie';
import type { SupabaseClientOptions } from '@supabase/supabase-js';

export type CookieOptions = { name?: string } & Pick<
  CookieSerializeOptions,
  'domain' | 'secure' | 'path' | 'sameSite' | 'maxAge' | 'expires'
>;

export type SupabaseClientOptionsWithoutAuth<T = 'public'> = Omit<
  SupabaseClientOptions<T>,
  'auth'
>;
