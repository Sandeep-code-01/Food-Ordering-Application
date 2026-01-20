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

      {/* 🔝 Header */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-6">

        {/* ✅ Image wrapper for bottom rounding */}
        <div className="w-full md:w-40 h-36 md:h-28 overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-700 mt-1">
            <span>{cuisines.join(", ")}</span>
            <span>| {price}</span>

            {/* ⭐ Avg Rating - GREEN PILL */}
            {avgRating && (
              <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                <span>★</span>
                {avgRating}
              </span>
            )}

            <span>| ⏱ {deliveryTime} mins</span>
          </div>
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
