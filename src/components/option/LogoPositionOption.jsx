import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";
import { logoPositions, navPositions } from "../constants/positions";

const LogoPositionOption = () => {
  const { changeLogoPosition } = useContext(SettingsContext);

  return (
    <div className="w-full overflow-hidden grid grid-cols-2 gap-2  justify-self-end items-end">
      <h2 className="col-span-2 text-center text-base font-semibold mb-2 p-1 bg-blue-400">
        เลือกตำแหน่งโลโก้
      </h2>
      <button
        className="bg-blue-300 px-4 py-2 rounded-lg text-white "
        onClick={() => {
          changeLogoPosition(logoPositions.left, navPositions.right);
          console.log("ซ้าย");
        }}
      >
        ซ้าย
      </button>
      <button
        className="bg-blue-300 px-4 py-2 rounded-lg text-white "
        onClick={() => {
          changeLogoPosition(logoPositions.center, navPositions.center);
          console.log("กลาง");
        }}
      >
        กลาง
      </button>
      <button
        className="bg-blue-300 px-4 py-2 rounded-lg text-white "
        onClick={() => {
          changeLogoPosition(logoPositions.right, navPositions.left);
          console.log("ขวา");
        }}
      >
        ขวา
      </button>
    </div>
  );
};
export default LogoPositionOption;
