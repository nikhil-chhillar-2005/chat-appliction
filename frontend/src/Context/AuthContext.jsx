import {createContext} from 'react';
import {useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user,setuser] = useState(localStorage.getItem('chat-app-user') ? JSON.parse(localStorage.getItem('chat-app-user')) : null);
  return (
    <AuthContext.Provider value={{ user,setuser }}>
      {children}
    </AuthContext.Provider>
  );
}