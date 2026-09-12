import { useState, createContext } from "react";
import { logoPositions, navPositions } from "../components/constants/positions";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("text-base");
  const [headerType, setHeaderType] = useState("type1");
  const [logoSize, setLogoSize] = useState("text-lg");
  const [logoPosition, setLogoPosition] = useState(logoPositions.left);
  const [navPosition, setNavPosition] = useState(navPositions.right);

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };
  const changeHeaderType = (newType) => {
    setHeaderType(newType);
  };
  const changeLogoSize = (newSize) => {
    setLogoSize(newSize);
  };
  const changeLogoPosition = (newLogoPosition, newNavPosition) => {
    setLogoPosition(newLogoPosition);
    setNavPosition(newNavPosition);
  };

  return (
    <SettingsContext.Provider
      value={{
        fontSize,
        changeFontSize,
        headerType,
        changeHeaderType,
        setHeaderType,
        logoSize,
        changeLogoSize,
        setLogoSize,
        logoPosition,
        changeLogoPosition,
        changeFontSize,
        changeHeaderType,
        navPosition,
        setNavPosition,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
