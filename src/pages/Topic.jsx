import { useParams } from "react-router-dom";
import Articles from "../components/Articles";
import Header from "../components/Header";
import Topics from "../components/Topics";

const Topic = () => {
  const { topic } = useParams();

  return (
    <>
      <Header />
      <Topics />
      <Articles topic={topic} />
    </>
  );
};

export default Topic;
