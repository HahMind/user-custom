import React, { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

const avatarSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="50" fill="#dbeafe"/>
    <circle cx="50" cy="38" r="20" fill="#60a5fa"/>
    <path d="M25 82c6-16 19-24 25-24s19 8 25 24" fill="#60a5fa"/>
  </svg>
`)}`;

const UserCard = ({ user, layout, handleDeleteUser }) => {
  const selectLayout = (layout) => {
    if (layout === "top") return "flex-col items-center text-left";
    if (layout === "left") return "flex-row items-center text-left gap-6";
    if (layout === "bottom")
      return "flex-col-reverse items-center text-center gap-4";
    if (layout === "right")
      return "flex-row-reverse items-center text-right gap-6";
  };

  const { fontSize } = useContext(SettingsContext);

  const handleImageError = (event) => {
    event.target.src = avatarSvg;
  };

  const profileImage = user?.image || user?.avatar || `https://i.pravatar.cc/150?img=${user.id}`;

  return (
    <div
      className={`flex ${selectLayout(layout)} rounded-lg  justify-center flex-wrap px-4 py-6 bg-gray-400 dark:bg-gray-700 dark:text-white  transition-all duration-500 ease-in-out relative`}
    >
      <img
        src={profileImage}
        alt="profile"
        onError={handleImageError}
        className="text-xs w-12 h-12 rounded-full bg-blue-500 hover:scale-[10] z-40 object-cover"
      />
      <div className="flex flex-col">
        <p className={`${fontSize} font-bold `}>Name: {user.name}</p>
        <p className={` ${fontSize}  `}>User ID : {user.id}</p>
        <p className={`${fontSize} `}>Email : {user.email}</p>
      </div>

      <button
        className="absolute top-2 right-2 rounded-full bg-red-200 hover:bg-red-700 hover:scale-105 px-2 py-1 transition-all duration-600 ease-in-out"
        onClick={() => handleDeleteUser(user.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default UserCard;
