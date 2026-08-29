import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import SettingMenu from "../components/SettingMenu";
import swal from "sweetalert";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [cardLayout, setCardLayout] = useState("top");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedUser, setSelectedUser] = useState(null);


  const handleGoBack = () => {
    setViewMode("grid");
  }
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && viewMode !== "grid") {
        handleGoBack();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [viewMode]); 

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
      {viewMode === "grid" ? (
        <div className="dark:bg-blue-900 min-h-screen transition-all duration-[500ms] ease-in-out">
          <SettingMenu
            setCardLayout={setCardLayout}
            handleAddUser={handleAddUser}
            setViewMode={setViewMode}
          />

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

          <header className="w-full flex justify-between items-center mb-4">
            <button
              onClick={handleGoBack}
              className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold"
              >
              กลับไปยังมุมมองตาราง
            </button>
          </header>
        <div className="flex gap-4 p-4 h-[80vh]">


          {/* ซีกซ้าย */}
          <div className="w-1/3 overflow-y-auto bg-gray-200 dark:bg-gray-800 rounded-lg p-2">
            <p>รายชื่อผู้ใช้</p>
          </div>

          {/* ซีกขวา */}
          <div className="w-2/3 bg-white dark:bg-gray-700 rounded-lg p-6">
            <img src="path/to/your/image.jpg" alt="Description" />
            <p>รายละเอียดผู้ใช้</p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Home;
