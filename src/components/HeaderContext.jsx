import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const HeaderContext = () => {
  const { headerType, logoSize, logoPosition } = useContext(SettingsContext);
  if (headerType === "type1") {
    return (
      <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center transition-all duration-500">
        <div className={`font-bold text-white p-2 rounded-md ml-1 ${logoSize} ${logoPosition} bg-orange-700`}>
          🦖 MyLogo
        </div>
        <nav className="flex gap-4 dark:text-white">
          <a href="#">Home</a>
          <a href="#">Users</a>
          <a href="#">About</a>
        </nav>
      </header>
    );
  }
  if (headerType === "type2") {
    return (
      <header className="w-full bg-blue-500 shadow-md p-4 flex flex-col justify-center items-center gap-2 transition-all duration-500">
        <div className={`flex gap-6 text-white ${logoSize} ${logoPosition}`}>
          🦖 MyLogo
        </div>
        <nav className="flex gap-4 text-white">
          <a href="#">Home</a>
          <a href="#">Users</a>
          <a href="#">About</a>
        </nav>
      </header>
    );
  }
  return null;
  
};

export default HeaderContext;
