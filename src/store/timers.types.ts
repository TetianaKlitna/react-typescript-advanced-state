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

export type Action = { type: 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS' };
