import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

const TypesOption = ({ setViewMode }) => {
  const handleChangeViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="overflow-hidden grid grid-cols-2 gap-2 min-w-full items-end">
      <button
        className="bg-blue-300 px-4 py-2 rounded-lg text-white "
        onClick={() => handleChangeViewMode("split")}
      >
        split view
      </button>
      <button
        className="bg-blue-300 px-4 py-2 rounded-lg text-white "
        onClick={() => handleChangeViewMode("grid")}
      >
        grid view
      </button>
      
    </div>
  );
};

export default TypesOption;
