// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';

import type { Quest } from '$lib/quests';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      quests: Quest[];
      safeGetSession: () => Promise<{
        session: Session | null;
        user: User | null;
      }>;
      session: Session | null;
      supabase: SupabaseClient;
      user: User | null;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
