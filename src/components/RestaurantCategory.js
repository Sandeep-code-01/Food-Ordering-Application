import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; 

const RestaurantCategory = ({
  title,
  items = [],
  showItems,
  setShowIndex,
}) => {
  useContext(UserContext); // kept as-is
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

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
                <div className="flex flex-col flex-1 gap-1">
                  {/* Name */}
                  <h3 className="font-semibold text-gray-700">{item.name}</h3>

                  {/* Avg Rating */}
                  {item.avgRating && (
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded w-max">
                      <span>★</span>
                      {item.avgRating}
                    </span>
                  )}

                  {/* Price */}
                  <p className="text-sm font-medium text-gray-900">
                    {item.price}
                  </p>
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

                    {/* Add Button */}
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
                      onClick={() => handleAddItem(item)}
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
