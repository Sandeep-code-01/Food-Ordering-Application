import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  useContext(UserContext); // context kept, not displayed

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
    <div className="relative m-3 w-full sm:w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden rounded-t-xl">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={name}
          src={image}
        />

        {/* Subtle gradient (bottom → top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* Offer Text */}
        {offerText && (
          <span className="absolute bottom-2 left-2 z-10 text-[#F8F6F2] font-extrabold text-xl md:text-2xl uppercase leading-tight drop-shadow-md">
            {offerText}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-bold text-lg truncate">
          {name || "Restaurant"}
        </h3>

        {/* Rating & Time */}
        <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-gray-800">
          <span className="flex items-center gap-1">
            <span className="relative inline-flex items-center justify-center w-5 h-5">
              <span className="absolute inset-0 bg-green-600 rounded-full"></span>
              <span className="relative text-white text-xs font-bold">★</span>
            </span>
            {avgRating || "N/A"}
          </span>
          <span>• {deliveryTime || "N/A"} mins</span>
        </div>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 truncate mt-1">
          {Array.isArray(cuisines) ? cuisines.join(", ") : "Various Cuisines"}
        </p>

        {/* Location (improved) */}
        {location && (
          <p className="flex items-center gap-1 text-sm text-gray-600 truncate mt-1">
            {location}
          </p>
        )}
      </div>
    </div>
  );
};

/* 🔥 Promoted HOC (improved UI) */
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <span
        className="
          absolute top-2 left-2 z-10
          bg-yellow-400/50
          text-black
          text-[10px] font-semibold uppercase
          px-2 py-0.5
          rounded-md
          shadow-sm
        "
      >
        Promoted
      </span>

      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
