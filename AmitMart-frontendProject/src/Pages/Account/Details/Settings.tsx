import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Settings() {
 
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="w-full  bg-gray-100 dark:bg-gray-900 py-1 px-2 sm:px-6 lg:px-12 text-gray-800 dark:text-gray-100 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center font-poppins">
          App Settings
        </h2>

        <div className="flex flex-col gap-6">
          <SettingItem
            label="Enable Dark Mode"
            checked={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
          <SettingItem label="Push Notifications" />
        </div>
      </motion.div>
    </div>
  );
}

function SettingItem({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="flex justify-between items-center p-4 rounded-xl bg-gray-100 dark:bg-gray-700 shadow-sm ">
      <span className="font-medium text-sm md:text-base">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onToggle}
        />
        <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none dark:bg-gray-600 peer-checked:bg-new-price rounded-full transition-colors duration-300"></div>
        <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full shadow-md transform peer-checked:translate-x-6 transition-transform duration-300"></div>
      </label>
    </div>
  );
}

export default Settings;
