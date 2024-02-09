import { useState } from "react";
import { patchArticleVotes } from "../utils/requests";

const Votes = ({ votes, article_id }) => {
  const [localVotes, setLocalVotes] = useState(0);
  const [isUpvoteClicked, setIsUpvoteClicked] = useState(false);
  const [isDownvoteClicked, setIsDownvoteClicked] = useState(false);
  const [isError, setIsError] = useState(false);

  const updateArticleVotes = (votes) => {
    patchArticleVotes(article_id, votes).catch((e) => {
      setIsError(true);
    });
  };

  const handleClick = (number) => {
    setIsError(false);
    if (number === 1) {
      if (isUpvoteClicked) {
        setLocalVotes(0);
        setIsUpvoteClicked(false);
        updateArticleVotes(-1);
      } else {
        setLocalVotes(1);
        setIsUpvoteClicked(true);
        setIsDownvoteClicked(false);
        updateArticleVotes(1);
      }
    }
    if (number === -1) {
      if (isDownvoteClicked) {
        setLocalVotes(0);
        setIsDownvoteClicked(false);
        updateArticleVotes(1);
      } else {
        setLocalVotes(-1);
        setIsDownvoteClicked(true);
        setIsUpvoteClicked(false);
        updateArticleVotes(-1);
      }
    }
  };

  const controlColour = (symbol) => {
    if (isError) {
      return "#1a1a1a";
    } else if (symbol === "+" && isUpvoteClicked) {
      return "green";
    } else if (symbol === "-" && isDownvoteClicked) {
      return "red";
    } else {
      return "#1a1a1a";
    }
  };

  return (
    <div className="votes">
      <p className="votes-text">
        Votes: {isError ? votes : votes + localVotes}
      </p>
      <div className="voting-buttons">
        {isError && <p>Whoops! Something went wrong!</p>}
        <button
          onClick={() => handleClick(1)}
          className="upvote"
          style={{ backgroundColor: `${controlColour("+")}` }}
        >
          +
        </button>
        <button
          onClick={() => handleClick(-1)}
          className="downvote"
          style={{ backgroundColor: `${controlColour("-")}` }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Votes;
