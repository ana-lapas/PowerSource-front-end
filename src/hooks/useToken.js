import { useContext } from 'react';
import UserContext from '../context/UserContext.js';

export default function useToken() {
  const { userData: user } = useContext(UserContext);

  return user.token;
}