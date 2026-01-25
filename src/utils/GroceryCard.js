import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const GroceryCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover rounded-md mb-2"
      />
      <h3 className="font-semibold text-center">{item.name}</h3>
      <p className="text-gray-600 text-center mb-2">₹{item.price}</p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default GroceryCard;
