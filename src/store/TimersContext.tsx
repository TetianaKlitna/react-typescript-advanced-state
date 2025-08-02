import { createContext, useContext } from 'react';
import { TimersContextValue } from './timers.types';

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error('TimerContext is null');
  }
  return timersCtx;
}

export default TimersContext;
