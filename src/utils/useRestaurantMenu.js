import { useState, useEffect } from "react";
import restaurants from "./Api"; // your local restaurants array

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    // Find restaurant by id from local data
    const restaurant = restaurants.find((res) => res.id === parseInt(resId));

    if (restaurant) {
      setResInfo(restaurant);
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
