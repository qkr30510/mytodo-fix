import React, { createContext, useReducer, useState } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;


const getId = localStorage.getItem('아이디');
const getpw = localStorage.getItem('비밀번호');

const User = {
  id: getId,
  password: getpw,
};

const StateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    // console.log(user)
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'LOGIN':
        const Login = () => {
          setUser(User);
         // console.log(user)
        };
        return Login();
      case 'LOGOUT':
        const isLogins = () => {
          setUser(null);
          console.log(user)
        };
        return isLogins();
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider, User };
