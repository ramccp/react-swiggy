import { useEffect, useRef, useState } from "react";
// import resData from "../utils/resData";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";
import { Link } from "react-router";

const RestaurantContainer = () => {
  const [resData, setResData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
  // let [resData,filteredData] = useRestaurantCards();
  // const [query,setQuery] = useState("");
  // // const [msg,setMsg] = useState("");
  const searchRef = useRef("");
  const status = useOnlineStatus();

  
  // console.log(status)
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
    <div id="btns" className="w-10/12 mx-auto mt-4">
      <button onClick={filterRestaurants} className="filter-btn bg-green-300 py-2 px-6 rounded-md hover:cursor-pointer">Filter</button>
      <button onClick={clearFilter} className="clear-btn bg-red-600 text-white py-2 px-6 mx-4 rounded-md hover:cursor-pointer hover:bg-red-500">Clear</button>
      {/* <input type="text" placeholder="Search" className="search-input" onChange={(e)=>setQuery(e.target.value)} value={query}/> */}
      <input type="text" placeholder="Search" ref={searchRef} className="bg-slate-100 placeholder:text-black text-black outline-none py-2 px-6 mx-4 rounded-md" />
      <input type="button" value={"Search"} onClick={()=>console.log(searchRef.current.value)} className="bg-amber-600 text-white py-2 px-6 mx-4 rounded-md hover:cursor-pointer"  />
      <span>{status?"🟢":"🔴"}</span>
    </div>
    <div className="res-container flex flex-wrap gap-4 w-10/12 mx-auto mt-10">
      {filteredData.length===0?<Shimmer/>:filteredData.map((obj) => {
        return <Link key={obj.info.id} to={`/restaurant/${obj.info.id}`}><RestaurantCard  {...obj.info} /></Link>;
      })}
    </div>
    </div>
  );
};

export default RestaurantContainer;
