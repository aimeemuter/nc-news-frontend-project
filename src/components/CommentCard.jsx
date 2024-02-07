import { dateFormatter } from "../utils/formatters";

const CommentCard = ({ comment: { created_at, author, votes, body } }) => {
  const { date, time } = dateFormatter(created_at);
  return (
    <li className="comment-card">
      <p className="body">{body}</p>
      <div className="author-date">
        <p className="author">{author}</p>
        <p className="date">{`${date} ${time}`}</p>
      </div>
      <div className="votes-area">
        <p>Votes:</p>
        <p className="votes">{votes}</p>
      </div>
    </li>
  );
};

export default CommentCard;
