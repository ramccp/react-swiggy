import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
function useRestaurantMenu(id) {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetch(MENU_URL + id)
      .then((res) => res.json())
      .then((jsonData) => {
        setResInfo(jsonData.data.cards[2].card.card.info);
        const filteredCards =
          jsonData.data?.cards
            ?.filter((card) => "groupedCard" in card)[0]
            ?.groupedCard.cardGroupMap.REGULAR.cards.filter(
              (obj) =>
                obj.card.card["@type"].includes("v2.ItemCategory") ||
                obj.card.card["@type"].includes("v2.NestedItemCategory")
            ) || [];
        console.log(filteredCards);
        setResMenu(filteredCards);
      });
  }, []);
  return [resInfo, resMenu];
}

export default useRestaurantMenu;
