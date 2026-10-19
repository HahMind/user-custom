import  { useState, useEffect, useContext, createRef } from "react";
import UserCard from "../components/UserCard";
import SettingMenu from "../components/SettingMenu";
import swal from "sweetalert";
import UserDetail from "../components/UserDetail";
import { SettingsContext } from "../context/SettingsContext";
import Header from "../components/Header";


const Home = () => {
  const [users, setUsers] = useState([]);
  const [cardLayout, setCardLayout] = useState("top");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedUser, setSelectedUser] = useState(null);
  const { fontSize } = useContext(SettingsContext);
  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
    );
  };
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(null);

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

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/employees/${userId}`,
        {
          method: "DELETE",
        },
      );

      if( !response.ok) {
        throw new Error(`การลบผู้ใช้ล้มเหลว: ${response.status}`);
      }
       const data = await response.json();
      console.log("หลังบ้านตอบกลับว่า : ", data);
      setUsers(users.filter((user) => user.id !== userId));

     
      swal({
        title: "ลบสำเร็จ",
        text: "ลบผู้ใช้เรียบร้อยแล้ว",
        icon: "success",
        timer: 2000,
        buttons: false,
      });
    } catch (error) {
      console.log("การลบผิดพลาด :", error);
    }
  };

  const handleAddUser = async () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
    };

    try {
      const response = await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();
      console.log("หลังบ้านตอบกลับว่า : ", data);

      setUsers([...users, newUser]);

      swal({
        title: "เพิ่มผู้ใช้สำเร็จ",
        text: "เพิ่มผู้ใช้เรียบร้อยแล้ว",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
    } catch (error) {
      console.error("ส่งข้อมูลผู้ใช้ล้มเหลว:", error);
      swal({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเพิ่มผู้ใช้ได้",
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsPending(true);
      setIsError(null);
      try {
        const response = await fetch("http://localhost:3000/api/employees");
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsError("เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้");
      } finally {
        setIsPending(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <SettingMenu
        setCardLayout={setCardLayout}
        handleAddUser={handleAddUser}
        setViewMode={setViewMode}
      />
      {viewMode === "grid" ? (
        <div className="dark:bg-blue-900 min-h-screen transition-all duration-[500ms] ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {isPending && (
              <p className="text-center dark:text-white">กำลังโหลดข้อมูล...</p>
            )}
            {isError && (
              <p className="text-center relative top-56  text-red-500 text-2xl">
                {isError}
              </p>
            )}
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
          {isPending && (
            <p className="text-center dark:text-white">กำลังโหลดข้อมูล...</p>
          )}
          {isError && (
            <p className="text-center relative top-56  text-red-500 text-2xl">
              {isError}
            </p>
          )}

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
                  <p className="text-xs dark:text-white overflow-x-auto ">
                    {user.email}
                  </p>
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
