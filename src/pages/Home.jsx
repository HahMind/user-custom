import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import SettingMenu from "../components/SettingMenu";
import swal from "sweetalert";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [cardLayout, setCardLayout] = useState("top");
  
  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    
    swal({
      title: "ลบสำเร็จ",
      text: "ลบผู้ใช้เรียบร้อยแล้ว",
      icon: "success",
      timer: 2000,
      buttons: false

      
    });
  };

  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
    }
    swal({
      title: "เพิ่มผู้ใช้สำเร็จ",
      text: "เพิ่มผู้ใช้เรียบร้อยแล้ว",
      icon: "success",
      timer: 1000,
      buttons: false
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
    <div className="dark:bg-blue-900 min-h-screen transition-all duration-[500ms] ease-in-out">
      <SettingMenu setCardLayout={setCardLayout} handleAddUser={handleAddUser} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} layout={cardLayout} handleDeleteUser={handleDeleteUser}  />
        ))}
      </div>
    </div>
  );
};

export default Home;
