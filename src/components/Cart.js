import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>

          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              Your cart is empty 🍽️
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Add items to see them here
            </p>
          </div>
        ) : (
          <>
            <ItemList items={cartItems} />

            {/* Footer */}
            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Total Items: {cartItems.length}
              </h2>

              <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
