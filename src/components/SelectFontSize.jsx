const SelectFontSize = ({
  isFontSizeMenuOpen,
  setIsFontSizeMenuOpen,
  setIsLayoutMenuOpen,
}) => {
  return (
    <div className="flex justify-center items-center  w-full">
      <button
        onClick={() => {
          setIsFontSizeMenuOpen(!isFontSizeMenuOpen);
          setIsLayoutMenuOpen(false);
        }}
        className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold w-full"
      >
        เลือกขนาดตัวอักษร
      </button>
    </div>
  );
};

export default SelectFontSize;
