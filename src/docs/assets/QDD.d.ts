export type StateId = string;
export type Event = string;
export type Transition = [Event, StateId];
export type State = {
  id: StateId;
  name: string;
  summary: string;
  description: string;
  transitions?: Transition[];
};
export type Quest = {
  title: string;
  description: string;
  states: State[];
};
