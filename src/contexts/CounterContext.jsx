import React, { createContext, useReducer, useEffect } from 'react';
import counterReducer from '../reducers/counterReducer';

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counters, dispatch] = useReducer(counterReducer, [], () => {
    const localData = localStorage.getItem('counters');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('counters', JSON.stringify(counters));
  }, [counters]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CounterContext.Provider value={{ counters, dispatch }}>{children}</CounterContext.Provider>
  );
};

export default CounterContextProvider;
