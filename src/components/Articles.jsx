import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/requests";
import ArticleCard from "./ArticleCard";
import "../styles/Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchArticles();
      setArticles(articles);
    };
    getArticles();
  }, []);
  return (
    <section className="articles">
      <ul className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </section>
  );
};

export default Articles;
