import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { fetchComments } from "../utils/requests";
import "../styles/Comments.css";

const Comments = ({ article: { article_id, comment_count } }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getComments = async () => {
      const comments = await fetchComments(article_id);
      setComments(comments);
    };
    getComments();
  }, [article_id]);
  const [showComments, setShowComments] = useState(false);
  const [buttonText, setButtonText] = useState("Show Comments");
  const { activeUser } = useContext(UserContext);

  const handleClick = () => {
    setShowComments((showComments) => !showComments);
    if (buttonText === "Show Comments") setButtonText("Hide Comments");
    if (buttonText === "Hide Comments") setButtonText("Show Comments");
  };

  return (
    <div>
      <div className="comment-toggle">
        {comment_count > 0 ? (
          <button onClick={handleClick}>{buttonText}</button>
        ) : (
          <p>There are no comments yet...</p>
        )}
      </div>
      {activeUser !== null && comment_count === 0 && (
        <button>Add Comment</button>
      )}
      {showComments && (
        <section className="comments">
          <ul className="comments-list">
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Comments;
