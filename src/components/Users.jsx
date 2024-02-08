import { useState, useEffect } from "react";
import User from "./User";
import { getUsers } from "../utils/requests";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  const handleClick = () => {
    localStorage.removeItem("user");
  };

  return (
    <>
      {!isLoading && <p>Select a profile to sign in...</p>}
      <ul className="users-list">
        {isLoading && <p>Loading...</p>}

        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </ul>
      {!isLoading && (
        <Link to="/articles">
          <button className="view-articles" onClick={handleClick}>
            View Articles
          </button>
        </Link>
      )}
    </>
  );
};

export default Users;
