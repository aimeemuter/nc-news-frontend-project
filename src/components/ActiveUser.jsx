import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom";

const ActiveUser = () => {
  const { activeUser } = useContext(UserContext);

  return (
    <>
      <Link to="/">
        {activeUser ? (
          <div className="active-user">
            {<p className="username">{activeUser.username}</p>}
            {activeUser.avatar_url && (
              <img
                className="avatar"
                src={activeUser.avatar_url}
                alt={`avatar image for ${activeUser.username}'s account`}
              />
            )}
            {activeUser.username && <p className="change-user">Change User</p>}
          </div>
        ) : (
          <div className="active-user">
            <p className="username">Log In</p>
          </div>
        )}
      </Link>
    </>
  );
};

export default ActiveUser;
