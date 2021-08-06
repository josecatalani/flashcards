import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

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
