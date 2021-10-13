import React from 'react';

const CountContext = React.createContext();

export function CountProvider({ children }) {
  const [count, setCount] = React.useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  );
}


export function useCountContext() {
  return React.useContext(CountContext);
} 