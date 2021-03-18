export type StateId = string;
export type Action = string;
export type Exit = [Action, StateId];
export type State = {
  id: StateId;
  summary: string;
  description: string;
  exits?: Exit[];
};
export type Quest = {
  title: string;
  description: string;
  states: State[];
};

