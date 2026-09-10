import { useState, createContext } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("text-base");
  const [headerType, setHeaderType] = useState("type1");
  const [logoSize, setLogoSize] = useState("text-lg");
  const [logoPosition, setLogoPosition] = useState("left");

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
    console.log(newSize);
  };
  return (
    <SettingsContext.Provider
      value={{
        fontSize,
        changeFontSize,
        headerType,
        setHeaderType,
        logoSize,
        setLogoSize,
        logoPosition,

      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
