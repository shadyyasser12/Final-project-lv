import { NavLink, useLocation } from "react-router-dom";

function AccountNav() {
  const location = useLocation();

  const navItems = [
    {
      path: "user",
      label: "Sign In",
      activePaths: ["/Account", "/Account/user"],
    },
    { path: "orders", label: "Orders", activePaths: ["/Account/orders"] },
    { path: "settings", label: "Settings", activePaths: ["/Account/settings"] },
  ];

  return (
    <div className="flex flex-col px-2 py-5 rounded-xl font-poppins font-semibold gap-1 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-100 transition-colors duration-500 sm:px-5">
      {navItems.map(({ path, label, activePaths }) => {
        const isActive = activePaths.includes(location.pathname);
        return (
          <NavLink
            key={path}
            to={path}
            className={`h-10 flex items-center px-3 transition-all duration-300 ${
              isActive
                ? "border-l-[5px] border-new-price bg-custom-gary dark:bg-gray-700 w-[170px]"
                : "hover:border-l-[5px] hover:border-new-price hover:bg-custom-gary dark:hover:bg-gray-800"
            }`}
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
}

export default AccountNav;
