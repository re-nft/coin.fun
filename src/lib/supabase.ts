import {
  PUBLIC_SUPABASE_PROJECT_ID,
  PUBLIC_SUPABASE_ANON_KEY
} from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(`https://${PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`, PUBLIC_SUPABASE_ANON_KEY);
