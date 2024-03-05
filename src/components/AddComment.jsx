import { useContext, useState } from "react";
import { postComment } from "../utils/requests";
import UserContext from "../contexts/UserContext";
import CommentCard from "./CommentCard";
import "../styles/AddComment.css";

const AddComment = ({ article_id }) => {
  const { activeUser } = useContext(UserContext);
  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState(undefined);
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
          setNewComment("");
        })
        .catch((e) => {
          setIsError(true);
          setNewComment(postedComment);
        });
    }
  };
  return (
    <>
      {!isCommenting && !postedComment && (
        <button className="add-comment-button" onClick={handleAddComment}>
          Add Comment
        </button>
      )}
      {isCommenting && !postedComment && (
        <form onSubmit={handleSubmit} className="comment-form">
          <label htmlFor="add-comment" className="comment-label">
            Enter your comment...
          </label>
          <textarea
            className="textbox"
            placeholder={`Commenting as ${activeUser.username}!`}
            id="add-comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button disabled={postedComment} className="submit-button">
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
