import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-news-application.onrender.com/api",
});

export const getUsers = () => {
  return instance.get(`/users`).then(({ data: { users } }) => users);
};

export const getUser = (username) => {
  return instance.get(`/users/${username}`).then(({ data: { user } }) => user);
};

export const getArticles = (topic) => {
  let url = `/articles`;
  if (topic) url += `?topic=${topic}`;
  return instance.get(url).then(({ data: { articles } }) => articles);
};

export const getArticle = (article_id) => {
  return instance
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => article);
};

export const getComments = (article_id) => {
  return instance
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => comments);
};

export const patchArticleVotes = (article_id, votes) => {
  return instance
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data: { article } }) => article);
};

export const postComment = (article_id, username, comment) => {
  return instance
    .post(`/articles/${article_id}/comments`, { username, body: comment })
    .then(({ data: { comment } }) => comment);
};

export const deleteComment = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return instance.get(`/topics`).then(({ data: { topics } }) => topics);
};
