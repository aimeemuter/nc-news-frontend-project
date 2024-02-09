import { useContext, useState } from "react";
import { postComment } from "../utils/requests";
import UserContext from "../contexts/UserContext";
import CommentCard from "./CommentCard";
import "../styles/AddComment.css";

const AddComment = ({ article_id }) => {
  const { activeUser } = useContext(UserContext);
  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState(null);
  const [hasPosted, setHasPosted] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleAddComment = () => {
    setIsCommenting(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim().length > 0) {
      postComment(article_id, activeUser.username, newComment)
        .then((comment) => {
          setPostedComment(comment);
          setHasPosted(true);
          setNewComment("");
        })
        .catch((e) => {
          setNewComment(postedComment);
          setIsError(true);
        });
    }
  };
  return (
    <>
      {!isCommenting && !hasPosted && (
        <button onClick={handleAddComment}>Add Comment</button>
      )}
      {isCommenting && (
        <form onSubmit={handleSubmit} className="comment-form">
          <label htmlFor="add-comment" className="comment-label">
            Enter your comment...
          </label>
          <textarea
            className="textbox"
            id="add-comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button disabled={hasPosted} className="submit-button">
            Submit
          </button>
        </form>
      )}
      {isError && <p>Whoops! Something went wrong!</p>}
      {postedComment && (
        <ul className="comments-list">
          <CommentCard comment={postedComment} />
        </ul>
      )}
    </>
  );
};

export default AddComment;
