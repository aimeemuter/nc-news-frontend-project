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

export const fetchUser = async (username) => {
  const response = await axios.get(
    `https://nc-news-application.onrender.com/api/users/${username}`
  );
  const {
    data: { user },
  } = response;
  return user;
};

export const fetchArticles = async () => {
  let url = `https://nc-news-application.onrender.com/api/articles`;
  const response = await axios.get(url);
  const {
    data: { articles },
  } = response;
  return articles;
};

export const fetchArticle = async (article_id) => {
  const response = await axios.get(
    `https://nc-news-application.onrender.com/api/articles/${article_id}`
  );
  const {
    data: { article },
  } = response;
  return article;
};
