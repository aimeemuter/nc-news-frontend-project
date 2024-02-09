import { useEffect, useState } from "react";
import { getArticles } from "../utils/requests";
import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";

const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
      <section className="articles">
        <ul className="articles-list">
          {isLoading && <span className="articles-loading">Loading...</span>}
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      </section>
      {isError && <p>Whoops! Something went wrong!</p>}
    </>
  );
};

export default Articles;
