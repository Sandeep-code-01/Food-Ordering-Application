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

  // ✅ NO setTimeout (tests friendly)
  useEffect(() => {
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  }, []);

  // ❌ offline
  if (!onlineStatus) {
    return <h1>You are offline</h1>;
  }

  // ✅ shimmer ONLY when data empty
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">
      {/* 🔍 Search */}
      <div className="flex gap-2 mb-6">
        <input
          data-testid="searchInput"
          className="border px-3 py-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          data-testid="searchBtn"
          className="px-4 py-2 bg-green-300"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
      </div>

      {/* 🍽 Cards */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => {
          const CardComponent = restaurant.promoted
            ? RestaurantCardPromoted
            : RestaurantCard;

          return (
            <Link
              key={restaurant.id}
              to={"/restaurants/" + restaurant.id}
            >
              <CardComponent resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
