import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-sm shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-[2px]">

        {/* Logo */}
        <img
          className="w-24 sm:w-28"
          src={LOGO_URL}
          alt="Logo"
        />

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-base sm:text-lg text-gray-800">

          {/* Online Status Indicator */}
          <div className="hidden sm:flex items-center gap-2 text-sm">
            {onlineStatus ? (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
              </span>
            ) : (
              <span className="inline-flex h-3 w-3 rounded-full bg-red-500"></span>
            )}
            <span className="text-gray-600">
              {onlineStatus ? "Online" : "Offline"}
            </span>
          </div>

          <Link className="hover:text-green-600 transition" to="/">Home</Link>
          <Link className="hover:text-green-600 transition" to="/about">About</Link>
          <Link className="hover:text-green-600 transition" to="/contact">Contact</Link>
          <Link className="hover:text-green-600 transition" to="/grocery">Grocery</Link>

          <Link className="hover:text-green-600 transition" to="/cart">
            🛒({cartItems.length})
          </Link>

          <button
            className="bg-blue-500 text-white px-3 py-[3px] rounded text-sm sm:text-base hover:bg-blue-600 transition"
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>

          <span className="hidden sm:block text-base">
            {loggedInUser}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
