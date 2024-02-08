import axios from "axios";

export const getUsers = () => {
  return axios
    .get("https://nc-news-application.onrender.com/api/users")
    .then(({ data: { users } }) => {
      return users;
    });
};

export const getUser = (username) => {
  return axios
    .get(`https://nc-news-application.onrender.com/api/users/${username}`)
    .then(({ data: { user } }) => {
      return user;
    });
};

export const getArticles = () => {
  let url = `https://nc-news-application.onrender.com/api/articles`;
  return axios.get(url).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticle = (article_id) => {
  return axios
    .get(`https://nc-news-application.onrender.com/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return axios
    .get(
      `https://nc-news-application.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};
