import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const {
    name = "Restaurant",
    cuisines = [],
    price = "-",
    avgRating = "-",
    deliveryTime = "-",
    image,
    menu = {},
  } = resInfo;

  const categories = Object.entries(menu);

  return (
    <div className="pt-24 px-4 md:px-12 max-w-5xl mx-auto">

      {/* 🔝 Restaurant Header */}
      <div className="flex gap-4 items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-36 h-28 object-cover rounded-xl"
        />

        <div className="flex-1">
          {/* Name + Rating */}
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl md:text-3xl">
              {name}
            </h1>

            {/* ⭐ Rating Badge (FIXED) */}
            <div className="flex items-center gap-1 font-semibold text-base">
              <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white text-sm leading-none">
                  ★
                </span>
              </span>
              <span>{avgRating}</span>
            </div>
          </div>

          {/* Meta Info */}
          <p className="text-sm text-gray-600 mt-1">
            {cuisines.join(", ")} • {price} • ⏱ {deliveryTime} mins
          </p>
        </div>
      </div>

      {/* 🍽 Menu Categories */}
      {categories.map(([title, items], index) => (
        <RestaurantCategory
          key={title}
          title={title}
          items={items}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex(index === showIndex ? null : index)
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
