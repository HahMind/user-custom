import React from "react";

const SelectTypes = ({ setIsFontSizeMenuOpen, setIsLayoutMenuOpen,isLayoutMenuOpen,isTypesMenuOpen, setIsTypesMenuOpen,  }) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
          setIsLayoutMenuOpen(false);
          setIsTypesMenuOpen(!isTypesMenuOpen);
          setIsFontSizeMenuOpen(false);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกรูปแบบการแสดงผล
      </button>
    </div>
  );
};

export default SelectTypes;
