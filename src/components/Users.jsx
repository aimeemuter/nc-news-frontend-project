import { useState, useEffect, useContext } from "react";
import User from "./User";
import { getUsers } from "../utils/requests";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import Loading from "./Loading";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setActiveUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  const handleClick = () => {
    localStorage.removeItem("user");
    setActiveUser(null);
  };

  return (
    <>
      {!isLoading && <p>Select a profile to sign in and view articles...</p>}
      <div className="container">{isLoading && <Loading />}</div>
      <ul className="users-list">
        {users.map((user) => (
          <User key={user.username} user={user} />
        ))}
      </ul>
      {!isLoading && <p>...or continue as a guest</p>}
      {!isLoading && (
        <Link to="/articles">
          <button className="continue-as-guest" onClick={handleClick}>
            CONTINUE AS GUEST
          </button>
        </Link>
      )}
    </>
  );
};

export default Users;
