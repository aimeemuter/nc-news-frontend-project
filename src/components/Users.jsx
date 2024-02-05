import { useState, useEffect } from "react";
import User from "./User";
import { fetchUsers } from "../utils/requests";
import { Link } from "react-router-dom";

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
    <section className="users-list">
      <ul>
        {users.map((user) => (
          <Link to="/home">
            <li key={user.username} className="user">
              <User user={user} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Users;
