import React from "react";
import { motion } from "framer-motion";

const terms = [
  {
    title: "1. Acceptance of Terms",
    description:
      "By using our website, you agree to these Terms and Conditions. If you do not agree, please do not use our services or website.",
  },
  {
    title: "2. Changes to Terms",
    description:
      "We may update these Terms occasionally. Continued use of the website after changes means you accept the new terms.",
  },
  {
    title: "3. Intellectual Property",
    description:
      "All content, including logos, images, and text, is owned by us and protected under copyright law. You may not use them without permission.",
  },
  {
    title: "4. User Responsibilities",
    description:
      "You are responsible for your activity on the website. Don't violate any laws or attempt to harm the platform.",
  },
  {
    title: "5. Termination",
    description:
      "We may suspend or block access to your account if we believe you are violating the terms or acting maliciously.",
  },
];

const Terms = () => {
  return (
    <div className="mt-1 min-h-screen px-6 py-12 md:px-10 lg:px-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: July 13, 2025
          </p>
        </div>

        <div className="space-y-6">
          {terms.map((section, index) => (
            <motion.div
              key={index}
              className="rounded-2xl bg-gray-100 dark:bg-gray-700 p-6 md:p-8 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
