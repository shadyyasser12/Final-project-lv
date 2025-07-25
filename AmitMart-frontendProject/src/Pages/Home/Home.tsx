import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-new-price text-white dark:bg-gray-900 dark:text-white px-6 transition-colors duration-500">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-poppins">
          Welcome to AmitMart
        </h1>
        <p className="text-lg md:text-xl mb-8 font-poppins">
          Discover the most stylish and trending items at the best prices.
        </p>
        <Link
          to="/shop"
          className="bg-white text-new-price dark:bg-gray-100 dark:text-gray-900 px-6 py-2 rounded-full text-sm font-semibold transition duration-300 hover:bg-new-price hover:border border-white hover:text-white dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Start Shopping
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
