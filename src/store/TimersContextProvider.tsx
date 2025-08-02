import {
  TimersState,
  Action,
  TimersContextProviderProps,
  TimersContextValue,
} from './timers.types.ts';
import { useReducer } from 'react';
import TimersContext from './TimersContext.tsx';

function TimerReducer(state: TimersState, action: Action): TimersState {
  if (action.type === 'START_TIMERS') {
    return { ...state, isRunning: true };
  }
  if (action.type === 'STOP_TIMERS') {
    return { ...state, isRunning: false };
  }
  if (action.type === 'ADD_TIMER') {
    return {
      ...state,
      timers: [...state.timers, { ...action.payload }],
    };
  }
  return state;
}

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(TimerReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
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
