import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { getUser } from "../utils/requests";

const User = ({ user }) => {
  const { setActiveUser } = useContext(UserContext);
  const handleClick = (e) => {
    const innerText = e.target.innerText;
    const username =
      innerText.length > 0 ? innerText : e.target.alt.split(" ")[3];
    getUser(username).then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      setActiveUser(user);
    });
  };

  return (
    <Link to="/articles" onClick={handleClick}>
      <li className="user">
        <p className="username">{user.username}</p>
        <img
          className="avatar"
          src={user.avatar_url}
          alt={`avatar image for ${user.username}`}
        />
      </li>
    </Link>
  );
};

export default User;
