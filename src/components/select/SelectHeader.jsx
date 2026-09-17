const SelectHeader = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className={` flex justify-center items-center  w-full`}>
      <button
        onClick={() => {
          setActiveMenu(activeMenu === "header" ? null : "header");
          console.log("กด H แล้ว");
          
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกเลย์เอาต์ Header
      </button>
    </div>
  );
};

export default SelectHeader;
