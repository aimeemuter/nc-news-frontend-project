import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { getUser } from "../utils/requests";
import { Link } from "react-router-dom";

const ActiveUser = () => {
  const { activeUser } = useContext(UserContext);
  const [user, setUser] = useState({ username: activeUser });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (user.username === null) {
      const userJson = localStorage.getItem("user");
      const storedUser = JSON.parse(userJson);
      storedUser && setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (activeUser !== null) {
      getUser(activeUser)
        .then((user) => {
          setUser(user);
          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((e) => {
          setIsError(true);
        });
    }
  }, [activeUser]);

  return (
    <>
      <Link to="/">
        <div className="active-user">
          {<p className="username">{user.username || "Log In"}</p>}
          {user.avatar_url && (
            <img
              className="avatar"
              src={user.avatar_url}
              alt={`avatar image for ${user.username}'s account`}
            />
          )}
          {user.username && <p className="change-user">Change User</p>}
        </div>
      </Link>
      {isError && <p>Whoops! Something went wrong!</p>}
    </>
  );
};

export default ActiveUser;
