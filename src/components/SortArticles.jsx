import { useEffect, useState } from "react";
import "../styles/SortArticles.css";

const SortArticles = ({ setSearchParams }) => {
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const handleClick = ({ sort_by, order }) => {
    if (sort_by) {
      setSortBy(sort_by);
    }
    if (order) {
      setOrder(order);
    }
  };

  const controlColour = ({ sortByValue, orderValue }) => {
    if (sortByValue) {
      return sortByValue === sort_by ? "#cc1e24" : "#e8e8e8";
    }
    if (orderValue) {
      return orderValue === order ? "#cc1e24" : "#e8e8e8";
    }
  };

  useEffect(() => {
    setSearchParams({ sort_by, order });
  }, [sort_by, order]);

  return (
    <>
      <span className="sort-by-dropdown">
        <button className="sort-by-button">Sort By</button>
        <div className="dropdown-options">
          <button
            className="dropdown-button"
            onClick={() => handleClick({ sort_by: "created_at" })}
            style={{ color: `${controlColour({ sortByValue: "created_at" })}` }}
          >
            date
          </button>
          <button
            className="dropdown-button"
            onClick={() => handleClick({ sort_by: "comment_count" })}
            style={{
              color: `${controlColour({ sortByValue: "comment_count" })}`,
            }}
          >
            comments
          </button>
          <button
            className="dropdown-button"
            onClick={() => handleClick({ sort_by: "votes" })}
            style={{ color: `${controlColour({ sortByValue: "votes" })}` }}
          >
            votes
          </button>
        </div>
      </span>
      <span className="order-dropdown">
        <button className="order-button">Order</button>
        <div className="dropdown-options">
          <button
            className="dropdown-button"
            onClick={() => handleClick({ order: "asc" })}
            style={{ color: `${controlColour({ orderValue: "asc" })}` }}
          >
            ascending
          </button>
          <button
            className="dropdown-button"
            onClick={() => handleClick({ order: "desc" })}
            style={{ color: `${controlColour({ orderValue: "desc" })}` }}
          >
            descending
          </button>
        </div>
      </span>
    </>
  );
};

export default SortArticles;
