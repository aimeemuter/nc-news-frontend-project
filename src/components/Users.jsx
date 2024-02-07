import { useState, useEffect } from "react";
import User from "./User";
import { fetchUsers } from "../utils/requests";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUsers(users);
    };
    getUsers();
  }, []);
  return (
    <section className="users">
      <ul className="users-list">
        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </ul>
    </section>
  );
};

export default Users;
