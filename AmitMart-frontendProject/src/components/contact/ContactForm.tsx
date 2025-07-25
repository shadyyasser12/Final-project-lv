import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-3xl lg:max-w-5xl bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 sm:p-10 shadow-xl"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Get in Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-new-price"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-new-price"
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm mb-1">Message</label>
        <textarea
          rows={6}
          placeholder="Write your message..."
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-400 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-new-price"
        ></textarea>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        type="submit"
        className="mt-8 w-full bg-new-price text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}
