import {
  TimersState,
  Action,
  TimersContextProviderProps,
  TimersContextValue,
} from './timers.types';
import { useReducer } from 'react';
import TimersContext from './TimersContext';

function TimerReducer(state: TimersState, action: Action): TimersState {
 
}

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(TimerReducer, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER' });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

export default TimersContextProvider;
