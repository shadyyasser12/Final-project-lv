import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../Cart/Cart";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Banner() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pagesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pagesRef.current &&
        !pagesRef.current.contains(event.target as Node)
      ) {
        setPagesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 z-50 shadow-md px-6 sm:px-9 py-3 flex items-center justify-between font-poppins font-semibold">
      <div className="flex items-center gap-2 text-lg text-new-price font-bold">
        <FontAwesomeIcon icon={faBagShopping} />
        <span>AmitMart</span>
      </div>

      <NavLinks
        pagesRef={pagesRef}
        pagesOpen={pagesOpen}
        setPagesOpen={setPagesOpen}
      />

      <div className="flex items-center gap-4">
        <div className={`${menuOpen ? "hidden" : "flex"} sm:flex`}>
          <Cart />
        </div>
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-new-price text-2xl"
          >
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </nav>
  );
}

export default Banner;
