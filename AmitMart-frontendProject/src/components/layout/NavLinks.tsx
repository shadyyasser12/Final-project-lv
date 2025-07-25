import { Link, useLocation } from "react-router-dom";

const pagesLinks = [
  { text: "About me", to: "/AboutUs" },
  { text: "Faq", to: "/faq" },
  { text: "404 Error page", to: "/404" },
  { text: "Register", to: "/Account/user" },
  { text: "Terms And Conditions", to: "/terms" },
];

export default function NavLinks({
  pagesOpen,
  setPagesOpen,
  pagesRef,
}: {
  pagesOpen: boolean;
  setPagesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pagesRef: React.RefObject<HTMLLIElement>;
}) {
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname.toLowerCase().startsWith(path.toLowerCase());

  return (
    <ul className="hidden sm:flex gap-8 items-center text-[15px] font-semibold tracking-wide text-gray-700 dark:text-gray-200">
      <li
        className={`transition-all duration-300 ${
          isActive("/Home")
            ? "text-new-price "
            : "hover:text-new-price hover:scale-105"
        }`}
      >
        <Link to="/Home">Home</Link>
      </li>

      <li ref={pagesRef} className="relative">
        <button
          onClick={() => setPagesOpen(!pagesOpen)}
          className={`transition-all duration-300 ${
            pagesOpen
              ? "text-new-price  scale-105"
              : "hover:text-new-price hover:scale-105"
          }`}
        >
          Pages
        </button>

        {pagesOpen && (
          <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-xl p-4 rounded-lg z-40 w-48 space-y-2 text-sm font-medium">
            {pagesLinks.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                onClick={() => setPagesOpen(false)}
                className="block hover:text-new-price hover:pl-2 transition-all duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}
      </li>

      <li
        className={`transition-all duration-300 ${
          isActive("/blog")
            ? "text-new-price "
            : "hover:text-new-price hover:scale-105"
        }`}
      >
        <Link to="/Blog">Blog</Link>
      </li>

      <li
        className={`transition-all duration-300 ${
          isActive("/shop")
            ? "text-new-price"
            : "hover:text-new-price hover:scale-105"
        }`}
      >
        <Link to="/shop">Shop</Link>
      </li>

      <li
        className={`transition-all duration-300 ${
          isActive("/Contactus")
            ? "text-new-price "
            : "hover:text-new-price hover:scale-105"
        }`}
      >
        <Link to="/Contactus">Contact Us</Link>
      </li>
    </ul>
  );
}
