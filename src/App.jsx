import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import Article from "./pages/Article";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  return (
    <UserContext.Provider value={{ activeUser, setActiveUser }}>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/articles" element={<Home />}></Route>
        <Route path="/article/:article_id" element={<Article />}></Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
