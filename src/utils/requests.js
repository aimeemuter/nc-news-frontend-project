import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-news-application.onrender.com/api",
});

export const getUsers = () => {
  return instance.get(`/users`).then(({ data: { users } }) => {
    return users;
  });
};

export const getUser = (username) => {
  return instance.get(`/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const getArticles = () => {
  let url = `/articles`;
  return instance.get(url).then(({ data: { articles } }) => {
    return articles;
  });
};

export const getArticle = (article_id) => {
  return instance
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = (article_id) => {
  return instance
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const patchArticleVotes = (article_id, votes) => {
  return instance
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const postComment = (article_id, username, comment) => {
  return instance
    .post(`/articles/${article_id}/comments`, { username, body: comment })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = (comment_id) => {
  return instance.delete(`/comments/${comment_id}`);
};
