import { type ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export type TimersContextProviderProps = {
  children: ReactNode;
};

export type StartTymersAction = { type: 'START_TIMERS' };

export type StopTimersAction = { type: 'STOP_TIMERS' };

export type AddTimerAction = { type: 'ADD_TIMER', payload: Timer };

export type Action = StartTymersAction | StopTimersAction | AddTimerAction;
