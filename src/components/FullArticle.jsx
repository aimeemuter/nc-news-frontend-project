import { useEffect, useState } from "react";
import { fetchArticle } from "../utils/requests";
import { useParams } from "react-router-dom";
import "../styles/FullArticle.css";

const FullArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  useEffect(() => {
    const getArticle = async () => {
      const article = await fetchArticle(article_id);
      setArticle(article);
    };
    getArticle();
  }, [article_id]);

  return (
    <main className="full-article">
      <h3 className="title">{article.title}</h3>
      <p className="topic">{article.topic}</p>
      <p className="author">{article.author}</p>
      <p className="votes">Votes: {article.votes}</p>
      <img className="image" src={article.article_img_url} />

      <p className="body">{article.body}</p>
      {article.created_at && (
        <p className="date">{article.created_at.substring(0, 10)}</p>
      )}
      {article.created_at && (
        <p className="time">{article.created_at.substring(11, 16)}</p>
      )}
      <p className="comment-count">Comment Count: {article.comment_count}</p>
    </main>
  );
};

export default FullArticle;
