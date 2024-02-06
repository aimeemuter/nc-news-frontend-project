const Article = ({ article }) => {
  return (
    <div className="article-card">
      <img className="image" src={article.article_img_url} />
      <div className="article-card-text">
        <p className="title">{article.title}</p>
        <p className="topic">{article.topic}</p>
        <p className="author">{article.author}</p>
        <p className="date">{article.created_at.substring(0, 10)}</p>
      </div>
    </div>
  );
};

export default Article;
