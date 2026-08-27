import { useState, useContext } from "react";
import LayoutButton from "./LayoutButton";
import { ThemeContext } from "../context/ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";
import SelectLayoutButton from "./SelectLayoutButton";
import SelectFontSize from "./SelectFontSize";
import FontSizeOption from "./FontSizeOption";
import AddUser from "./AddUser";

const SettingMenu = ({ setCardLayout, handleAddUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLayoutMenuOpen, setIsLayoutMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isFontSizeMenuOpen, setIsFontSizeMenuOpen] = useState(false);

  return (
    <div>
      {/* Setting Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsLayoutMenuOpen(false);
        }}
        className="h-12 w-12 rounded-full fixed bottom-5 right-5 bg-blue-500 z-50"
      >
        ⚙️
      </button>

      {/* Layout Menu Button */}
      {isOpen && (
        <div className="flex flex-col fixed bottom-20 right-5 w-50  rounded-lg  shadow-2xl p-1  z-50">
          <div className="flex justify-center items-center p-2 w-full ">
            <SelectLayoutButton
              setIsLayoutMenuOpen={setIsLayoutMenuOpen}
              isLayoutMenuOpen={isLayoutMenuOpen}
              setIsFontSizeMenuOpen={setIsFontSizeMenuOpen}
            />
          </div>

          {/* Layout Options  */}
          <div
            className={`grid rounded-md ${isLayoutMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500 ease-in-out `}
          >
            <div className="overflow-hidden">
              <div className=" p-2 mt-2">
                <LayoutButton setCardLayout={setCardLayout} />
              </div>
            </div>

            {/* Font Size Button */}
            <div className="flex justify-center items-center p-2 w-full">
              <SelectFontSize
                isFontSizeMenuOpen={isFontSizeMenuOpen}
                setIsFontSizeMenuOpen={setIsFontSizeMenuOpen}
                setIsLayoutMenuOpen={setIsLayoutMenuOpen}
              />
            </div>

            {/* Font Size Options */}
            <div
              className={`grid rounded-md ${isFontSizeMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500 ease-in-out `}
            >
              <div className="overflow-hidden">
                <div className=" p-2 mt-2">
                  <FontSizeOption />
                </div>
              </div>
            </div>

            {/* Add User Button */}
            <div className="flex justify-center items-center p-2 w-full">
              <AddUser handleAddUser={handleAddUser} />
            </div>

            {/* Theme Toggle Button */}
            <div className="flex justify-center items-center p-2 w-full">
              <ToggleThemeButton toggleTheme={toggleTheme} theme={theme} />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SettingMenu;
