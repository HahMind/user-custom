import React from "react";

const UserCard = ({ user, layout }) => {
  const selectLayout = (layout) => {
    if (layout === "top") 
        return "flex-col items-center text-left";
    if (layout === "left") 
        return "flex-row items-center text-left gap-6";
    if (layout === "bottom") 
        return "flex-col-reverse items-center text-center gap-4";
    if (layout === "right") 
        return "flex-row-reverse items-center text-right gap-6";
  };
  return (
    <div
      className={`flex ${selectLayout(layout)} rounded-lg  justify-center flex-wrap px-4 py-6 bg-gray-400`}
    >
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt="profile"
        className="text-xs  w-12 h-12 rounded-full bg-blue-500"
      />
      <div className="flex flex-col">
        <p className=" text-gray-800 rounded-md p-1 font-bold text-lg">
          Name: {user.name}
        </p>
        <p className=" text-gray-800 rounded-md p-1 text-sm ">
          User ID : {user.id}
        </p>
        <p className=" text-gray-800 rounded-md p-1 text-sm ">
          Email : {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
