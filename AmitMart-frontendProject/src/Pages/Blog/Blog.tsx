import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Introducing Our New Summer Collection",
    summary:
      "Discover the latest trends and pieces from our premium summer line. Light, elegant, and made for comfort.",
    date: "July 10, 2025",
    author: "Shady Yasser",
  },
  {
    id: 2,
    title: "Behind the Brand: Our Story",
    summary:
      "Learn how our vision began and what drives our creative process — from fabric selection to final design.",
    date: "June 25, 2025",
    author: "Shady Yasser",
  },
  {
    id: 3,
    title: "5 Tips to Choose the Right Fit",
    summary:
      "Understand how to pick the perfect size and style for your body — comfort meets confidence.",
    date: "June 15, 2025",
    author: "Team ConsoleNinja",
  },
  {
    id: 4,
    title: "How I Built This Brand from Scratch",
    summary:
      "From sketches on paper to a full-blown collection — a look into my journey and lessons learned along the way.",
    date: "May 30, 2025",
    author: "Shady Yasser",
  },
  {
    id: 5,
    title: "My Favorite Fashion Picks This Month",
    summary:
      "A handpicked list of styles I personally love and recommend. Clean cuts, soft fabrics, and bold confidence.",
    date: "May 12, 2025",
    author: "Shady Yasser",
  },
  {
    id: 6,
    title: "From Idea to Reality: Launching a Product",
    summary:
      "Ever wonder what it takes to go from concept to launch? Here's how I brought one of our top products to life.",
    date: "April 28, 2025",
    author: "Shady Yasser",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Latest Blog Posts
        </motion.h1>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.15 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-6 space-y-3">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  By {post.author} • {post.date}
                </p>

                <p className="text-gray-700 dark:text-gray-200">
                  {post.summary}
                </p>
                <button className="mt-4 inline-block text-new-price font-semibold transition">
                  Read more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
