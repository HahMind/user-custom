const SelectFontSize = ({
activeMenu,
setActiveMenu
}) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
          setActiveMenu(activeMenu === "fontSize" ? null : "fontSize");
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกขนาดตัวอักษร
      </button>
    </div>
  );
};

export default SelectFontSize;
