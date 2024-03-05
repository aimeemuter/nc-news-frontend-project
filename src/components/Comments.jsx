import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { getComments } from "../utils/requests";
import "../styles/Comments.css";
import AddComment from "./AddComment";
import Loading from "./Loading";

const Comments = ({ article: { article_id, comment_count } }) => {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [buttonText, setButtonText] = useState("Show Comments");
  const { activeUser } = useContext(UserContext);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (article_id !== undefined && showComments) {
      getComments(article_id)
        .then((comments) => {
          setComments(comments);
          setIsLoading(false);
        })
        .catch((e) => {
          setIsError(true);
        });
    } else {
      setIsLoading(false);
    }
  }, [showComments]);

  const handleClick = () => {
    setShowComments((showComments) => !showComments);
    if (buttonText === "Show Comments") setButtonText("Hide Comments");
    if (buttonText === "Hide Comments") setButtonText("Show Comments");
  };

  return (
    <div>
      <div className="comment-toggle">
        {comment_count > 0 && (
          <button className="comment-toggle-button" onClick={handleClick}>
            {buttonText}
          </button>
        )}
        {comment_count === 0 && !isLoading && (
          <p>There are no comments yet...</p>
        )}
      </div>
      {!activeUser && <p>Log in to comment!</p>}
      {activeUser && <AddComment article_id={article_id} />}
      {showComments && !isLoading && (
        <section className="comments">
          <ul className="comments-list">
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
            <div className="container">{isLoading && <Loading />}</div>
            {isError && <p>Whoops! Something went wrong!</p>}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Comments;
