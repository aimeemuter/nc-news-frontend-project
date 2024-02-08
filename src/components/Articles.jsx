import { useEffect, useState } from "react";
import { getArticles } from "../utils/requests";
import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
      })
      .catch((e) => {
        setIsError(true);
      });
  }, []);

  return (
    <>
      <section className="articles">
        <ul className="articles-list">
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
