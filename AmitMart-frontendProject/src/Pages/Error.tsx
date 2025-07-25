import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900 px-6 py-16 text-center text-gray-800 dark:text-white transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg space-y-6"
      >
        <h1 className="text-7xl font-extrabold text-new-price dark:text-new-price">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-new-price hover:bg-gray-300 dark:hover:bg-gray-800 text-white font-medium rounded-lg transition duration-300"
        >
          Go to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
