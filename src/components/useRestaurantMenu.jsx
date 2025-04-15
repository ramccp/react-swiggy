import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/constants";
function useRestaurantMenu(id){
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetch(MENU_URL+id)
      .then((res) => res.json())
      .then((data) => setResInfo(data.data.cards[2].card.card.info));
    },[])
    return resInfo;
}

export default useRestaurantMenu;