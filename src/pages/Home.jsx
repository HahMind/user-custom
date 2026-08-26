import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import SettingMenu from "../components/SettingMenu";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [cardLayout, setCardLayout] = useState("top");


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
      <SettingMenu setCardLayout={setCardLayout} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} layout={cardLayout} />
        ))}
      </div>
    </div>
  );
};

export default Home;
