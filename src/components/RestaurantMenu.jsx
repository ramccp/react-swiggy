import { MENU_IMG_URL } from "../utils/constants";
function RestaurantMenu({ isOpen,setIsOpen,res }) {
  
  return (
    <div className="w-9/12 mx-auto border-b-4 p-4 border-b-gray-500">
      <div className="flex justify-between">
        <h1 className="font-bold px-6 text-2xl">
          {res.title} ({res.itemCards.length})
        </h1>
        <p onClick={()=>{
          if(res.title===isOpen){
            setIsOpen("")
          }
          else{

            setIsOpen(res.title)
          }
        }} className="pr-4">{isOpen===res.title?"🔼":"🔽"}</p>
      </div>
      {isOpen===res.title && res.itemCards.map((obj) => (
        <div className="border-b-1 border-b-gray-300 flex mt-1 p-3 items-center justify-between">
          <div className="flex-grow-1 w-9/12 p-6">
            <h1 className="font-bold text-gray-700">{obj.card.info.name}</h1>
            <p>₹ {obj.card.info.price / 100}</p>
            {obj.card.info.ratings.aggregatedRating.rating && (
              <p>
                {obj.card.info.ratings.aggregatedRating.rating} (
                {obj.card.info.ratings.aggregatedRating.ratingCountV2}){" "}
              </p>
            )}
            <p className="line-clamp-2">{obj.card.info.description}</p>
          </div>
          <div className="relative">
            <img
              className="w-40 h-37 object-cover rounded-xl object-center"
              src={MENU_IMG_URL + obj.card.info.imageId}
              alt=""
            />
            <button className="absolute -bottom-2 left-8 bg-black text-white text-lg rounded-md px-7 py-1">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
