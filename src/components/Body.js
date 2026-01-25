import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import restaurants from "../utils/Api";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  }, []);

  if (!onlineStatus) return <h1>You are offline</h1>;
  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">
      {/* 🔍 Controls */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">

        {/* Left side: Search + Top Rated */}
        <div className="flex items-center gap-3 flex-wrap">
          <input
            data-testid="searchInput"
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurant"
          />

          <button
            data-testid="searchBtn"
            className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-200"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>

          {/* ⭐ Top Rated */}
          <button
            data-testid="topRatedBtn"
            className="px-5 py-2  bg-orange-400 text-white rounded-lg shadow hover:bg-orange-500 transition-colors duration-200 font-semibold flex items-center gap-1"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => parseFloat(res.avgRating) > 4.5
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Top Rated <span>⭐</span>
          </button>
        </div>

        {/* Right side: Username */}
        <div className="flex items-center gap-2">
          <span className="font-semibold px-3 py-2 rounded-lg bg-blue-500 text-white shadow">
            User:
          </span>
          <input
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* 🍽 Cards fixed alignment using grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => {
          const CardComponent = restaurant.promoted
            ? RestaurantCardPromoted
            : RestaurantCard;

          return (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              <CardComponent resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
