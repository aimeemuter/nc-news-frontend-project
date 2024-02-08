import { useEffect, useState } from "react";
import { getArticle } from "../utils/requests";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import FullArticle from "../components/FullArticle";
import Header from "../components/Header";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
      });
  }, [article_id]);

  return (
    <div>
      <Header />
      <FullArticle article={article} isLoading={isLoading} />
      <Comments article={article} />
      {isError && <p>Whoops! Something went wrong!</p>}
    </div>
  );
};

export default Article;
