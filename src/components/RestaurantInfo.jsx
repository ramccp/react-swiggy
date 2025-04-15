import { useParams } from "react-router";

import useRestaurantMenu from "./useRestaurantMenu";

function RestaurantInfo() {
  // const {id} = useParams();
  const {id} = useParams();
  const resInfo = useRestaurantMenu(id);
  console.log(resInfo)
  return (
    <>
      {resInfo ? (
        <div className="w-10/12 mx-auto my-4">
          <h1>{resInfo.name}</h1>
          <p>{resInfo.avgRating} ({resInfo.totalRatingsString})•{resInfo.costForTwoMessage}</p>
          <p>{resInfo.cuisines.join(",")}</p>
        </div>
      ) : (
        <h1 className="text-2xl w-10/12 mx-auto">Loading...</h1>
      )}
    </>
  );
}

export default RestaurantInfo;
