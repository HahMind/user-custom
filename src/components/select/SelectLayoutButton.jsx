import React, { act } from "react";

const SelectLayoutButton = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
          setActiveMenu(activeMenu === "layout" ? null : "layout");
          console.log("กด L แล้ว");
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกเลย์เอาต์การแสดงผล
      </button>
    </div>
  );
};

export default SelectLayoutButton;
