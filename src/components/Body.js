import { useState } from "react";
import RestrauntCard from "./RestrurantCard";

const Body = () => { 

const [searchText, setSearchText] = useState();

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          className="search-input"
          value={searchText}
          placeholder="Search"
          onChange={(e) => onChangeInput }
        />
        <button>Search</button>
      </div>
      <div className="body_wrapper">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </>
  );
};
export default Body;
