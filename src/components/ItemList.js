import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    const info = item.card?.info || item;

    dispatch(
      addItem({
        id: info.id,
        name: info.name,
        price:
          info.price
            ? info.price / 100
            : info.defaultPrice
            ? info.defaultPrice / 100
            : 0,
        description: info.description,
        avgRating: info.avgRating,
        image: item.image || "",
      })
    );
  };

  return (
    <div>
      {items.map((item, index) => {
        const info = item.card?.info || item;
        const price =
          typeof info.price === "number" ? info.price : info.price || 0;

        // ✅ Unique key to avoid duplicate key warnings
        const uniqueKey = `${info.id ?? info.name}-${index}`;

        return (
          <div
            key={uniqueKey}
            data-testid="foodItems"
            className="p-3 m-2 border-b border-gray-200 flex justify-between relative"
          >
            {/* LEFT SECTION: Name, Rating, Price, Description */}
            <div className="w-9/12 pr-4 flex flex-col items-start gap-1">
              <h3 className="font-semibold text-gray-800">{info.name}</h3>

              {info.avgRating && (
                <span className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                  <span>★</span>
                  {info.avgRating}
                </span>
              )}

              <p className="text-sm font-medium">₹{price}</p>

              {info.description && (
                <p className="text-xs text-gray-600 mt-1">{info.description}</p>
              )}
            </div>

            {/* RIGHT SECTION: Image + ADD button */}
            <div className="w-3/12 relative">
              {item.image && (
                <img
                  src={item.image}
                  alt={info.name}
                  className="w-full h-28 object-cover rounded-lg"
                />
              )}

              <button
                onClick={() => handleAddItem(item)}
                className="
                  absolute -bottom-4 left-1/2 -translate-x-1/2
                  bg-white text-green-600
                  border border-green-400
                  px-4 py-1.5
                  rounded-full
                  text-sm font-semibold
                  shadow-md
                  hover:bg-green-50
                  hover:scale-105
                  active:scale-95
                  transition-all duration-200
                "
              >
                ADD <span className="text-lg leading-none">+</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
