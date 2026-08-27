import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const FontSizeOption = () => {
  const { changeFontSize } = useContext(SettingsContext);

  return (
 <div className="overflow-hidden grid grid-cols-2 gap-2 min-w-full items-end">
        <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeFontSize("text-xs")}
              >
                xs Font
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeFontSize("text-base")}
              >
                base Font
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeFontSize("text-2xl")}
              >
                2xl Font
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeFontSize("text-4xl")}
              >
                4xl Font
              </button>
    </div>
  )
}

export default FontSizeOption