import { useEffect, useRef, useState } from "react";
// import resData from "../utils/resData";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";

const RestaurantContainer = () => {
  const [resData, setResData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  // const [query,setQuery] = useState("");
  // const [msg,setMsg] = useState("");
  const searchRef = useRef("");
  const status = useOnlineStatus();
  console.log(status)
  console.log("RES CONTAINER RENDERED")

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((obj) => {
        setResData(obj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredData(obj.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      });
  }, []);

  function filterRestaurants(){
    let filteredRestaurants = resData.filter((obj)=>obj.info.avgRating>4.3);
    setFilteredData(filteredRestaurants)
  }

  function clearFilter(){
    setFilteredData(resData);
  }

  return (
    <div>
    <div id="btns">
      <button onClick={filterRestaurants} className="filter-btn">Filter</button>
      <button onClick={clearFilter} className="clear-btn">Clear</button>
      {/* <input type="text" placeholder="Search" className="search-input" onChange={(e)=>setQuery(e.target.value)} value={query} /> */}
      <input type="text" placeholder="Search" className="search-input" ref={searchRef} />
      <input type="button" value={"Search"} onClick={()=>console.log(searchRef.current.value)}  />
      <span>{status?"🟢":"🔴"}</span>
    </div>
    <div className="res-container">
      {filteredData.length===0?<Shimmer/>:filteredData.map((obj) => {
        return <RestaurantCard {...obj.info} />;
      })}
    </div>
    </div>
  );
};

export default RestaurantContainer;
