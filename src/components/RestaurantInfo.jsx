import { useParams } from "react-router";

import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantMenu from "./RestaurantMenu";

function RestaurantInfo() {
  const { id } = useParams();
  const [resInfo, resMenu] = useRestaurantMenu(id);
  return (
    <>
      {resInfo ? (
        <div className="w-10/12 mx-auto my-4">
          <h1>{resInfo.name}</h1>
          <p>
            {resInfo.avgRating} ({resInfo.totalRatingsString})•
            {resInfo.costForTwoMessage}
          </p>
          <p>{resInfo.cuisines.join(",")}</p>
        </div>
      ) : (
        <h1 className="text-2xl w-10/12 mx-auto">Loading...</h1>
      )}
      {resMenu &&
        resMenu.map(({card:{card}}) => {
          if ("categories" in card) {
            return (
              <div>
                <h1 className="m-3 text-xl">{card.title}</h1>
                {card.categories.map((item) => {
                  return (
                    <RestaurantMenu res={item}/>
                  );
                })}
              </div>
            );
          } else {
            return <RestaurantMenu res={card}/>
          }
        })}
    </>
  );
}

export default RestaurantInfo;
