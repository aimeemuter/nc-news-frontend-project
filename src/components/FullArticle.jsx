import "../styles/FullArticle.css";
import { dateFormatter } from "../utils/formatters";
import Votes from "./Votes";

const FullArticle = ({ article, isLoading }) => {
  if (!isLoading) {
    const { date, time } = dateFormatter(article.created_at);
    return (
      <main className="full-article">
        <p className="topic">{article.topic}</p>
        <h3 className="title">{article.title}</h3>
        <p className="author">Written by {article.author}</p>
        <p className="date">{`${date} ${time}`}</p>
        <img className="image" src={article.article_img_url} />
        <p className="body">{article.body}</p>
        <Votes votes={article.votes} article_id={article.article_id} />
      </main>
    );
  }
};

export default FullArticle;
