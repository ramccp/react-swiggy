import { useDispatch, useSelector } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants";
import { removeItem,addItem } from "../utils/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store)=>store.cart.items)
  return (
    <>
      <h1 className="w-10/12 mx-auto my-4 text-2xl">Cart:{cartItems.length}</h1>
      {cartItems.map((obj) => (
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
                  <button onClick={()=>dispatch(addItem(obj))} className="absolute -bottom-2 left-8 bg-black text-white text-lg rounded-md px-7 py-1">
                    Add
                  </button>
                  <button onClick={()=>dispatch(removeItem())} className="absolute -bottom-2 left-8 bg-black text-white text-lg rounded-md px-7 py-1">
                    Remove
                  </button>
                </div>
              </div>
            ))}
    </>
  );
}

export default Cart;
