import React, { FC } from "react";
import Header from "../Header/Header";

const App: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
