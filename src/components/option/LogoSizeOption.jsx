import { useContext } from "react";
import { SettingsContext } from "../../context/SettingsContext";

const LogoSizeOption = () => {
    const { changeLogoSize } = useContext(SettingsContext);

    return (
        <div className="w-full overflow-hidden grid grid-cols-2 gap-2  justify-self-end items-end">
            <h2 className="col-span-2 text-center text-base font-semibold mb-2 p-1  bg-blue-400">เลือกขนาดโลโก้</h2>
        <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeLogoSize("text-sm")}
              >
                ขนาดเล็ก
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeLogoSize("text-2xl")}
              >
                ขนาดกลาง
              </button>
              <button
                className="bg-blue-300 px-4 py-2 rounded-lg text-white "
                onClick={() => changeLogoSize("text-4xl")}
              >
                ขนาดใหญ่
              </button>
             


             
    </div>
    )
}
export default LogoSizeOption;