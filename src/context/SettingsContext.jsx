import { useState, createContext } from "react";

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("text-base");

const changeFontSize = (newSize) => {
    setFontSize(newSize);
    console.log(newSize);
    
}
  return (
    <SettingsContext.Provider value={{ fontSize, changeFontSize }}>
      {children}
    </SettingsContext.Provider>
  );
};
