import React, { createContext, useReducer } from "react";
const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "DO_LOGOUT":
      return {
        ...state,
        isLogged: false,
      };
    case "DO_LOGIN":
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

const initialState = {
  isLoading: false,
  cards: [],
};

const Store = ({ children }: any) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    // @ts-ignore
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
