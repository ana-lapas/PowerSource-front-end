import { createContext } from 'react';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [token, setToken] = useLocalStorage('token', {});
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}