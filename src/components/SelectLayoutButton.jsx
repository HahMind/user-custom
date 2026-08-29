import React from "react";

const SelectLayoutButton = ({
  setIsLayoutMenuOpen,
  isLayoutMenuOpen,
  setIsFontSizeMenuOpen,
  setIsTypesMenuOpen,
}) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
          setIsLayoutMenuOpen(!isLayoutMenuOpen);
          setIsFontSizeMenuOpen(false);
          setIsTypesMenuOpen(false);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกเลย์เอาต์
      </button>
    </div>
  );
};

export default SelectLayoutButton;
