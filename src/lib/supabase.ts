import { createClient } from '@supabase/supabase-js';

import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_PROJECT_ID} from '$env/static/public';

export const supabaseClient = createClient(`https://${PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`, PUBLIC_SUPABASE_ANON_KEY);
