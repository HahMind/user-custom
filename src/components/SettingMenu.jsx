import { useState, useContext } from "react";
import LayoutButton from "./LayoutButton";
import { ThemeContext } from "../context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
import SelectLayoutButton from "./select/SelectLayoutButton";
import SelectFontSize from "./select/SelectFontSize";
import FontSizeOption from "./option/FontSizeOption";
import AddUser from "./AddUser";
import SelectTypes from "./select/SelectTypes";
import TypesOption from "./option/TypesOption";
import SelectHeader from "./select/SelectHeader";
import HeaderOption from "./option/HeaderOption";

const SettingMenu = ({ setCardLayout, handleAddUser, setViewMode }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div>
      {/* Setting Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setActiveMenu(null); // ปิดเมนูอื่น ๆ เมื่อเปิดเมนู
        }}
        className="h-12 w-12 rounded-full fixed bottom-5 right-5 bg-blue-500 z-50"
      >
        ⚙️
      </button>

      {/* Layout Menu Button */}
      {isOpen && (
        <div className="flex flex-col items-end justify-end  fixed bottom-20 right-5 w-50  rounded-lg  shadow-2xl p-1  z-50">
          {/* Header Selector */}
          <div className="flex justify-center items-center p-2 w-full ">
            <SelectHeader
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>
          {/* Header Options */}
          <div
            className={`grid rounded-md transition-all duration-500 ease-in-out ${activeMenu === "header" ? "grid-rows-[1fr]  w-full" : "grid-rows-[0fr] "}      `}
          >
            <div className="overflow-hidden">
              <div className=" p-2 mt-2">
                <HeaderOption />
              </div>
            </div>
          </div>

          {/* Layout Selector */}
          <div className="flex justify-center items-center p-2 w-full ">
            <SelectLayoutButton
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>

          {/* Layout Options  */}
          <div
            className={`grid rounded-md ${activeMenu === "layout" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500 ease-in-out  `}
          >
            <div className="overflow-hidden">
              <div className=" p-2 mt-2">
                <LayoutButton setCardLayout={setCardLayout} />
              </div>
            </div>
          </div>

          {/* Type Selector */}
          <div className="flex justify-center items-center p-2 w-full ">
            <SelectTypes
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>
          {/* Type Options */}
          <div
            className={`grid rounded-md transition-all duration-500 ease-in-out ${activeMenu === "types" ? "grid-rows-[1fr]  w-full" : "grid-rows-[0fr] "}      `}
          >
            <TypesOption setViewMode={setViewMode} />
          </div>

          {/* Font Size Button */}
          <div className="flex justify-center items-center p-2 w-full">
            <SelectFontSize
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>

          {/* Font Size Options */}
          <div
            className={`grid rounded-md ${activeMenu === "fontSize" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500 ease-in-out `}
          >
            <div className="overflow-hidden">
              <div className=" p-2 mt-2">
                <FontSizeOption />
              </div>
            </div>
          </div>

          {/* Add User Button */}
          <div className="flex justify-end    p-2 ">
            <AddUser handleAddUser={handleAddUser} />
          </div>

          {/* Theme Toggle Button */}
          <div className="flex justify-center items-center p-2 w-full">
            <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingMenu;
