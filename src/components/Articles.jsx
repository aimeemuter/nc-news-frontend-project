import { useEffect, useState } from "react";
import { getArticles } from "../utils/requests";
import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";
import Loading from "./Loading";

const Articles = ({ topic, searchParams }) => {
  const [articles, setArticles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, searchParams)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topic, searchParams]);

  return (
    <>
      <div className="container">{isLoading && <Loading />}</div>
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
