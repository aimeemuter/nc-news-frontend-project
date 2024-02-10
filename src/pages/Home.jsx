import { useSearchParams } from "react-router-dom";
import Articles from "../components/Articles";
import Header from "../components/Header";
import Topics from "../components/Topics";
import SortArticles from "../components/SortArticles";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <Header />
      <Topics />
      <SortArticles setSearchParams={setSearchParams} />
      <Articles searchParams={searchParams} />
    </div>
  );
};

export default Home;
