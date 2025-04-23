import { useParams } from "react-router";

import useRestaurantMenu from "./useRestaurantMenu";

function RestaurantInfo() {
  // const {id} = useParams();
  const { id } = useParams();
  const [resInfo, resMenu] = useRestaurantMenu(id);
  // console.log(resInfo)
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
                    <div>
                      <h2 className="font-4xl">{item.title}</h2>
                      {item.itemCards.map((obj) => (
                        <h1>{obj.card.info.name}</h1>
                      ))}
                    </div>
                  );
                })}
              </div>
            );
          } else {
            return (
              <div className="w-10/12 mx-auto border-b-4 p-4 border-b-gray-500 font-bold">
                <h1 className="font-bold text-2xl">{card.title}</h1>
                {card.itemCards.map((obj) => (
                  <h1>{obj.card.info.name}</h1>
                ))}
              </div>
            );
          }
        })}
    </>
  );
}

export default RestaurantInfo;
