import { IMG_BASE_URL } from "../utils/constants";
function RestaurantCard({name,avgRating,cloudinaryImageId,locality,sla,cuisines}) {
    return (
      <div className="card w-65 border-x-3 border-dotted border-red-200 rounded-lg">
        <div className="image  ">
          <img src={IMG_BASE_URL+cloudinaryImageId} className="w-full h-45 rounded-lg object-cover" />
        </div>
        <div className="content p-2">
          <p className="title font-bold line-clamp-1">{name}</p>
          <p className="rate-sla">
            <span className="text-black">{avgRating}</span>.<span className="sla font-bold">{sla.slaString}</span>
          </p>
          <p className="cuisines text-slate-500 line-clamp-1">{cuisines.join(',')}</p>
          <p className="location text-slate-500">{locality}</p>
        </div>
      </div>
    );
  }

  export default RestaurantCard;