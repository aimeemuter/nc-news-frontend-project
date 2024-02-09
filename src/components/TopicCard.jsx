import { Link } from "react-router-dom";

const TopicCard = ({ topic: { slug } }) => {
  return (
    <Link to={`/topics/${slug}`}>
      <button className="topic-button">{slug}</button>
    </Link>
  );
};

export default TopicCard;
