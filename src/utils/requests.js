import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get(
    "https://nc-news-application.onrender.com/api/users"
  );
  const {
    data: { users },
  } = response;
  return users;
};
