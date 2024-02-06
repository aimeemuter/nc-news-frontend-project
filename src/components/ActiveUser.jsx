import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { fetchUser } from "../utils/requests";
import { Link } from "react-router-dom";

const ActiveUser = () => {
  const { activeUser } = useContext(UserContext);
  const [user, setUser] = useState({ username: activeUser });
  useEffect(() => {
    const getUser = async () => {
      const user = await fetchUser(activeUser);
      setUser(user);
    };
    getUser();
  }, [activeUser]);

  return (
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
      </div>
    </Link>
  );
};

export default ActiveUser;
