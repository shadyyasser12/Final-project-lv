
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pagesLinks = [
  { text: "About me", to: "/AboutUs" },
  { text: "Faq", to: "/faq" },
  { text: "404 Error page", to: "/404" },
  { text: "Register", to: "/Account/user" },
  { text: "Terms And Conditions", to: "/terms" },
];

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-lg z-50 p-6 space-y-6 text-sm sm:hidden"
    >
      <button
        onClick={closeMenu}
        className="absolute top-4 right-4 text-2xl text-new-price"
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>

      <div className="space-y-3 font-medium text-[15px]">
        {["/Home", "/Blog", "/shop", "/Contactus"].map((to, idx) => (
          <Link
            key={idx}
            to={to}
            onClick={closeMenu}
            className="block hover:text-new-price"
          >
            {to.replace("/", "").charAt(0).toUpperCase() + to.slice(2)}
          </Link>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-300 dark:border-gray-600 space-y-2">
        <span className="block text-xs uppercase font-bold text-gray-500 dark:text-gray-400">
          Pages
        </span>
        <div className="space-y-2 font-semibold text-[14px] leading-5">
          {pagesLinks.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={closeMenu}
              className="block hover:text-new-price"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
