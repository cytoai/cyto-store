import { StateType, ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof import('src/actions').default>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
