import { useEffect, useState } from "react";
import { fetchArticle } from "../utils/requests";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import FullArticle from "../components/FullArticle";
import Header from "../components/Header";

const Article = () => {
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
    <div>
      <Header />
      <FullArticle article={article} />
      <Comments article={article} />
    </div>
  );
};

export default Article;
