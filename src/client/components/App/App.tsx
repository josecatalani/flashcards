import React, { FC, useState } from "react";
import Header from "../Header/Header";

export const ThemeContext =
  React.createContext<{
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  }>(null);

const App: FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ isLogged, setIsLogged }}>
        <Header />
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default App;
