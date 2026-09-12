const SelectHeader = ({
  isHeaderMenuOpen,
  setIsHeaderMenuOpen,
  setIsLayoutMenuOpen,
  setIsFontSizeMenuOpen,
  setIsTypesMenuOpen,
}) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
          setIsHeaderMenuOpen(!isHeaderMenuOpen);
          setIsLayoutMenuOpen(false);
          setIsFontSizeMenuOpen(false);
          setIsTypesMenuOpen(false);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกเลย์เอาต์ Header
      </button>
    </div>
  );
};

export default SelectHeader;
