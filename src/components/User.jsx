import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <>
      <p className="username">{user.username}</p>
      <img
        className="avatar"
        src={user.avatar_url}
        alt={`avatar image for ${user.username}'s account`}
      />
    </>
  );
};

export default User;
