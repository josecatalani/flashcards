import React, { FC } from "react";
import Header from "../Header/Header";
import Store from "../../context/Store";

const App: FC = ({ children }) => {
  return (
    <>
      <Store>
        <Header />
        {children}
      </Store>
    </>
  );
};

export default App;
