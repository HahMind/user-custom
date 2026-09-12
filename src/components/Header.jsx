import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";


const Header = () => {
  const { headerType, logoSize, logoPosition, navPosition } = useContext(SettingsContext);
  const isNavCenter = navPosition === "left-1/2 mt-10 -translate-x-1/2";
  if (headerType === "type1") {
    return (
      <header className={`relative w-full min-h-16   shadow-md p-4 transition-[height,min-height] duration-500 rounded-lg ${isNavCenter ? "h-28" : "h-16  "}`}>
        <div className={`absolute top-1/2 -translate-y-1/2  text-white p-2 rounded-md ${logoSize} ${logoPosition} bg-orange-700  transition-[left,transform,font-size] duration-300  `}>
          🦖 MyLogo
        </div>
        <nav className={`absolute top-1/2 -translate-y-1/2 flex gap-4 dark:text-white ${navPosition} transition-[left,transform] duration-300`}>
          <button type="button">Home</button>
          <button type="button">Users</button>
          <button type="button">About</button>
        </nav>
      </header>
    );
  }
  if (headerType === "type2") {
    return (
      <header className={`relative w-full min-h-16 bg-green-200  shadow-md p-4 transition-[height,min-height] duration-500 rounded-lg ${isNavCenter ? "h-28" : "h-16  "}`}>
        <div className={`absolute top-4 flex gap-6 text-black ${logoSize} ${logoPosition} transition-[left,right,transform,font-size] duration-300`}>
          🦖 MyLogo
        </div>
        <nav className={`absolute bottom-4 flex gap-4 text-black ${navPosition} transition-[left,transform] duration-300`}>
          <button type="button">Home</button>
          <button type="button">Users</button>
          <button type="button">About</button>
        </nav>
      </header>
    );
  }
  return null;
  
};

export default Header;