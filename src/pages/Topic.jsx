import { useParams, useSearchParams } from "react-router-dom";
import Articles from "../components/Articles";
import Header from "../components/Header";
import Topics from "../components/Topics";
import SortArticles from "../components/SortArticles";

const Topic = () => {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Header />
      <Topics />
      <SortArticles setSearchParams={setSearchParams} />
      <Articles topic={topic} searchParams={searchParams} />
    </>
  );
};

export default Topic;
