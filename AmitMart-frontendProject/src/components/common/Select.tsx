import React from "react";

type Props = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
};

function Select({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}: Props) {
  const baseClasses =
    "appearance-none w-full px-4 py-2 pr-10 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-new-price transition-all duration-300";

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl w-full mb-4">
     
      <div className="relative w-full">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={baseClasses}
        >
          <option disabled value="">
            -- Select Category --
          </option>
          <option className="bg-white dark:bg-gray-800" value="men's clothing">
            👔 Men's Clothing
          </option>
          <option
            className="bg-white dark:bg-gray-800"
            value="women's clothing"
          >
            👗 Women's Clothing
          </option>
          <option className="bg-white dark:bg-gray-800" value="electronics">
            🔌 Electronics
          </option>
          <option className="bg-white dark:bg-gray-800" value="jewelery">
            💎 Jewelery
          </option>
        </select>


        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>


      <div className="relative w-full">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={baseClasses}
        >
          <option disabled value="">
            -- Sort By --
          </option>
          <option className="bg-white dark:bg-gray-800" value="price-asc">
            ⬆️ Price: Low to High
          </option>
          <option className="bg-white dark:bg-gray-800" value="price-desc">
            ⬇️ Price: High to Low
          </option>
          <option className="bg-white dark:bg-gray-800" value="rating">
            ⭐ Best Rated
          </option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Select;
