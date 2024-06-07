export type QuestStatus = 'available' | 'done' | 'locked';

export interface Quest<
  Id extends string = string,
  Component extends string = string
> {
  id: Id;
  component: Component;
  points: number;
  title: string;

  complete: (userId: string) => Promise<boolean | void>;
  getStatus: (userId?: string) => Promise<QuestStatus>;
  isAvailable?: (userId: string) => Promise<boolean>;
  isCompleted?: (userId: string) => Promise<boolean>;

  onLoad?: (userId?: string) => Promise<void>;
}

export function makeQuest<Id extends string, Component extends string>(
  quest: Quest<Id, Component>
) {
  return quest;
}
