import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  useContext(UserContext);

  const {
    name,
    avgRating,
    cuisines,
    deliveryTime,
    image,
    offer,
    location,
    aggregatedDiscountInfoV3,
  } = resData;

  const offerText = offer || aggregatedDiscountInfoV3?.header || null;

  return (
    <div className="relative m-3 w-full sm:w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden rounded-xl">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={name}
          src={image}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent rounded-xl"></div>

        {/* Offer */}
        {offerText && (
          <span className="absolute bottom-2 left-2 z-10 text-[#F8F6F2] font-extrabold text-xl md:text-2xl uppercase drop-shadow-md">
            {offerText}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg truncate">
          {name || "Restaurant"}
        </h3>

        <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-gray-800">
          <span className="flex items-center gap-1">
            <span className="relative inline-flex w-5 h-5">
              <span className="absolute inset-0 bg-green-600 rounded-full"></span>
              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 m-auto w-3 h-3 text-white"
                fill="currentColor"
              >
                <path d="M12 17.3l-6.18 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63L22 9.24l-5.46 4.73 1.64 7.03z" />
              </svg>
            </span>
            {avgRating || "N/A"}
          </span>
          <span>• {deliveryTime || "N/A"} mins</span>
        </div>

        <p className="text-sm text-gray-600 truncate mt-1">
          {Array.isArray(cuisines) ? cuisines.join(", ") : "Various Cuisines"}
        </p>

        {location && (
          <p className="text-sm text-gray-600 truncate mt-1">
            {location}
          </p>
        )}
      </div>
    </div>
  );
};

/* 🔥 Promoted HOC */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative w-full sm:w-[260px]">
      <span className="absolute top-2 left-2 z-20 bg-yellow-400/60 text-black text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md">
        Promoted
      </span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
