import React from "react";

const SelectTypes = ({ 
activeMenu,
setActiveMenu}) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
setActiveMenu(activeMenu === "types" ? null : "types");
          console.log("กด T แล้ว");
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกรูปแบบการแสดงผล
      </button>
    </div>
  );
};

export default SelectTypes;
