import { useContext, useState } from "react";
import { dateFormatter } from "../utils/formatters";
import UserContext from "../contexts/UserContext";
import { deleteComment } from "../utils/requests";

const CommentCard = ({
  comment: { created_at, author, votes, body, comment_id },
}) => {
  const { activeUser } = useContext(UserContext);
  const { date, time } = dateFormatter(created_at);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    setIsError(false);
    setIsDeleted(true);
    deleteComment(comment_id).catch((e) => {
      setIsError(true);
      setIsDeleted(false);
    });
  };

  return (
    <>
      {!isDeleted && (
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
          {activeUser && activeUser.username === author && (
            <button className="delete-button" onClick={handleClick}>
              delete
            </button>
          )}
          {isError && <p>Whoops! Something went wrong!</p>}
        </li>
      )}
    </>
  );
};

export default CommentCard;
