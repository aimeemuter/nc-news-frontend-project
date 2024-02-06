import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/requests";
import Article from "./Article";

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
    <div className="articles">
      {articles.map((article) => (
        <Article key={article.article_id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
