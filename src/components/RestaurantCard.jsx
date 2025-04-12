import { IMG_BASE_URL } from "../utils/constants";
function RestaurantCard({name,avgRating,cloudinaryImageId,locality,sla,cuisines}) {
    return (
      <div className="card">
        <div className="image">
          <img src={IMG_BASE_URL+cloudinaryImageId} />
        </div>
        <div className="content">
          <p className="title">{name}</p>
          <p className="rate-sla">
            <span>{avgRating}</span>.<span className="sla">{sla.slaString}</span>
          </p>
          <p className="cuisines">{cuisines.join(',')}</p>
          <p className="location">{locality}</p>
        </div>
      </div>
    );
  }

  export default RestaurantCard;