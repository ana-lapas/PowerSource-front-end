import { createContext } from 'react';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage('userData', {});
  const [kart, setKart] = useState([]);
  return (
    <UserContext.Provider value={{ userData, setUserData, kart, setKart }}>
      {children}
    </UserContext.Provider>
  );
}