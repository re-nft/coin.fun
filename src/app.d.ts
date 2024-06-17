// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Session, SupabaseClient, User } from '@supabase/supabase-js';

import type { QuestV2 } from '$lib/quests';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      quests: QuestV2[];
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
