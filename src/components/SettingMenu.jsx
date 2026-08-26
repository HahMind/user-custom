import { useState } from "react";
import LayoutButton from "./LayoutButton";

const SettingMenu = ({ setCardLayout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLayoutMenuOpen, setIsLayoutMenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsLayoutMenuOpen(false);
        }}
        className="h-12 w-12 rounded-full fixed bottom-5 right-5 bg-blue-500"
      >
        ⚙️
      </button>

      {isOpen && (
        <div className="flex flex-col fixed bottom-20 right-5   rounded-lg  shadow-2xl p-1  ">
          <button
            onClick={() => setIsLayoutMenuOpen(!isLayoutMenuOpen)}
            className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold"
          >
            เลือกเลย์เอาต์
          </button>

          <div
            className={`grid rounded-md ${isLayoutMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} transition-all duration-500 ease-in-out `}
          >
            <div className="overflow-hidden">
              <div className=" p-2 mt-2">

              <LayoutButton setCardLayout={setCardLayout} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingMenu;
