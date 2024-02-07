import "../styles/FullArticle.css";
import { dateFormatter } from "../utils/formatters";

const FullArticle = ({ article }) => {
  // use isLoading state instead later?
  if (article.created_at) {
    const { date, time } = dateFormatter(article.created_at);
    return (
      <main className="full-article">
        <p className="topic">{article.topic}</p>
        <h3 className="title">{article.title}</h3>
        <p className="author">Written by {article.author}</p>
        <p className="date">{`${date} ${time}`}</p>
        <img className="image" src={article.article_img_url} />
        <p className="body">{article.body}</p>
        <p className="votes">Votes: {article.votes}</p>
      </main>
    );
  }
};

export default FullArticle;
