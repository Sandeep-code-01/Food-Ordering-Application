import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCategory = ({
  title,
  items = [],
  showItems,
  setShowIndex,
}) => {
  useContext(UserContext); // kept as-is

  return (
    <div className="my-5 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center px-5 py-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={() => setShowIndex()}
      >
        <h2 className="font-semibold text-lg text-gray-800">
          {title} <span className="text-gray-500">({items.length})</span>
        </h2>
        <span className="text-gray-500 text-sm">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {/* Accordion Content */}
      {showItems && (
        <div className="p-5 flex flex-col gap-4">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between gap-4 border rounded-xl p-4 bg-white hover:shadow-md transition-all"
              >
                {/* Left Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-700">
                    {item.name}
                  </h3>

                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {item.price}
                  </p>

                  {item.avgRating && (
                    <div className="flex items-center gap-1 text-sm font-semibold text-green-600 mt-1">
                      <span>★</span>
                      {item.avgRating}
                    </div>
                  )}
                </div>

                {/* Image + Add Button */}
                {item.image && (
                  <div className="relative w-28 h-28 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {item.offer && (
                      <span className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                        {item.offer}
                      </span>
                    )}

                    {/* Attractive Add Button */}
                    <button
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2
                                  flex items-center gap-1
                                      px-3 py-1.5
                                          bg-white text-green-600
                                                  border border-green-300
                                                          text-sm font-semibold
                                                          rounded-full
                                                      shadow-sm
                                                  hover:bg-green-50
                                            hover:shadow-md
                                        hover:scale-105
                                  transition-all duration-200"
                      onClick={() =>
                        console.log("Add item:", item.name)
                      }
                    >
                      Add <span className="text-lg leading-none">+</span>
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
