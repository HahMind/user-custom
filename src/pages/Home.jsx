import React, { useState, useEffect, useContext } from "react";
import UserCard from "../components/UserCard";
import SettingMenu from "../components/SettingMenu";
import swal from "sweetalert";
import ToggleThemeButton from "../components/ToggleThemeButton";
import { ThemeContext } from "../context/ThemeContext";
import UserDetail from "../components/UserDetail";
import { SettingsContext } from "../context/SettingsContext";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [cardLayout, setCardLayout] = useState("top");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedUser, setSelectedUser] = useState(null);
  const { fontSize } = useContext(SettingsContext);
  const handleUpdateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  }

  const handleSelectUser = (user) => {
    if (selectedUser === user) {
      setSelectedUser(null);
    } else {
      setSelectedUser(user);
    }
  };

  const handleGoBack = () => {
    setViewMode("grid");
  };
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === "Escape" && viewMode !== "grid") {
  //       handleGoBack();
  //     }
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [viewMode]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));

    swal({
      title: "ลบสำเร็จ",
      text: "ลบผู้ใช้เรียบร้อยแล้ว",
      icon: "success",
      timer: 2000,
      buttons: false,
    });
  };

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
    };
    swal({
      title: "เพิ่มผู้ใช้สำเร็จ",
      text: "เพิ่มผู้ใช้เรียบร้อยแล้ว",
      icon: "success",
      timer: 1000,
      buttons: false,
    });
    setUsers([...users, newUser]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <SettingMenu
        setCardLayout={setCardLayout}
        handleAddUser={handleAddUser}
        setViewMode={setViewMode}
      />
      {viewMode === "grid" ? (
        <div className="dark:bg-blue-900 min-h-screen transition-all duration-[500ms] ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                layout={cardLayout}
                handleDeleteUser={handleDeleteUser}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* <header className="w-full flex justify-between items-center mb-4">
            <button
              onClick={handleGoBack}
              className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold"
            >
              กลับไปยังมุมมองตาราง
            </button>
          </header> */}
          <div className="flex gap-4 p-4 h-[80vh]">
            {/* ซีกซ้าย */}
            <div className="w-1/3 overflow-y-auto bg-gray-200 dark:bg-gray-800 rounded-lg p-2 flex flex-col gap-2">
              <p className="font-bold text-center mb-2 dark:text-white">
                รายชื่อผู้ใช้
              </p>
              {users.map((user) => (
                <div
                  key={user.id}
                  onClick={() => handleSelectUser(user)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors  ${selectedUser?.id === user.id ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100  "}   ${fontSize}`}
                >
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs dark:text-white overflow-x-auto ">{user.email}</p>
                </div>
              ))}
            </div>

            {/* ซีกขวา */}
            <div className="w-2/3 bg-white dark:bg-gray-700 rounded-lg p-6 flex flex-col gap-4 items-center justify-center ">
              {selectedUser ? (
                <UserDetail 
                  selectedUser={selectedUser}
                  setSelectedUser={setSelectedUser}
                  handleUpdateUser={handleUpdateUser}
                />
              ) : (
                <div>โปรดเลือกผู้ใช้จากรายชื่อด้านซ้าย</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
