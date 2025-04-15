import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/constants";
function useRestaurantMenu(id){
    const [resInfo, setResInfo] = useState(null);
    const [resMenu,setResMenu] = useState(null);
    useEffect(()=>{
        fetch(MENU_URL+id)
      .then((res) => res.json())
      .then((data) => {
        setResInfo(data.data.cards[2].card.card.info)
        let x = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        x = x.filter(obj=>obj.card?.card["@type"]?.includes('food.v2.ItemCategory'))
        console.log(x);
        setResMenu(x);
    });
    },[])
    return [resInfo,resMenu];
}

export default useRestaurantMenu;