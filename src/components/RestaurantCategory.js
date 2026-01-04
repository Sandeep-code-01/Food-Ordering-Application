import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCategory = ({ title, items = [], showItems, setShowIndex }) => {
  return (
    <div className="my-5 border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
      
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center px-5 py-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={setShowIndex}
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
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-4 bg-white hover:shadow-md transition-all"
              >
                {/* Image */}
                {item.image && (
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />

                    {/* Offer Badge */}
                    {item.offer && (
                      <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                        {item.offer}
                      </span>
                    )}
                  </div>
                )}

                {/* Item Info */}
                <div className="mt-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {item.name}
                    </h3>

                    {/* Custom Green Dot Rating */}
                    {item.avgRating && (
                      <span className="flex items-center gap-1 text-sm font-semibold text-gray-800 whitespace-nowrap">
                        <span className="relative inline-flex items-center justify-center w-5 h-5">
                          <span className="absolute inset-0 bg-green-600 rounded-full"></span>
                          <span className="relative text-white text-xs font-bold leading-none">
                            ★
                          </span>
                        </span>
                        {item.avgRating}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.price}
                  </p>
                </div>
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
