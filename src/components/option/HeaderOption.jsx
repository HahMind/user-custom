import React, { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import LogoSizeOption from "./LogoSizOption";
import LogoPositionOption from "./LogoPositionOption";

const HeaderOption = () => {
  const { changeHeaderType } = useContext(SettingsContext);

  return (
 <div className="overflow-hidden grid grid-cols-1 gap-2 min-w-full items-end">
        <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeHeaderType("type1")}
              >
                type 1
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeHeaderType("type2")}
              >
                type 2
              </button>
             
<div className="flex flex-col ">

             {/* เลือกขนาดโลโก้ */}
             <LogoSizeOption />
             {/* เลือกตำแหน่งโลโก้ */}
             <LogoPositionOption />
</div>

    </div>
  )
}

export default HeaderOption