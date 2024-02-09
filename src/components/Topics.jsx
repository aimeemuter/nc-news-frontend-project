import { useEffect, useState } from "react";
import { getTopics } from "../utils/requests";
import TopicCard from "./TopicCard";
import "../styles/Topics.css";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="topics-navigation">
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </nav>
  );
};

export default Topics;
