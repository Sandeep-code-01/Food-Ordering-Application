import { useState, useEffect } from "react";
import GroceryCard from "../utils/GroceryCard";
import groceryData from "../utils/groceryData";

const Grocery = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(groceryData);
  }, []);

  const categories = [...new Set(groceryData.map((item) => item.category))];

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = groceryData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(""); // collapse
      setFilteredItems(groceryData);
    } else {
      setSelectedCategory(category);
      const filtered = groceryData.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="mx-auto max-w-4xl bg-white rounded-xl shadow-md px-6 py-5 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Grocery Online Store
        </h1>

        <input
          type="text"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search items..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        {/* Categories Accordion */}
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <GroceryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;
