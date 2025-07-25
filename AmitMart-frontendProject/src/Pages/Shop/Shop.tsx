import { useEffect, useState } from "react";
import Featers from "../../components/common/Featers";
import Loading from "../../components/common/Loading";
import ProductList from "../../components/product/ProductList";
import SearchBar from "../../components/layout/SearchBar";
import Select from "../../components/common/Select"; 
type Product = {
  id: string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products.length === 0) {
    return <Loading />;
  }

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  if (sortBy === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort(
      (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0)
    );
  }

  return (
    <div className="container flex flex-col justify-center items-center gap-5 px-4 sm:px-6 md:px-10 mt-10">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        <Select
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
      <Featers title="Exclusive Products" />
      <ProductList products={filteredProducts} />
      <Featers title="Trending items" />

 
      <div className="w-full border-t border-gray-300 dark:border-gray-700 mt-10 pt-8 text-sm text-gray-600 dark:text-gray-400">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-center">
          <p>
            Welcome to our store! Discover top products in electronics, fashion,
            jewelry, and more. We offer secure checkout, fast delivery, and
            friendly support.
          </p>
          <p>
            Follow us on social media and subscribe to our newsletter for the
            latest updates. Thank you for shopping with us!
          </p>
          <p>© {new Date().getFullYear()} AmitMart. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
