import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import AccountNav from "../../components/account/AccountNav";

function Account() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("userImage");
    if (savedImage) {
      setImageSrc(savedImage);
    }
  }, []);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImageSrc(reader.result as string);
        localStorage.setItem("userImage", reader.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const openFilePicker = () => {
    inputFileRef.current?.click();
  };

  return (
    <div className="w-full min-h-screen  dark:bg-gray-900 px-4 py-5 md:px-10 md:py-16 flex justify-center items-center mt- transition-colors duration-500">
      <div className="w-full max-w-7xl bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row ">
        <div className="w-full md:w-[25%] flex flex-row md:flex-col justify-center items-center py-10 gap-8 bg-white dark:bg-gray-900 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
          <div className="flex flex-col items-center gap-3">
            <div
              className="rounded-full w-24 h-24 overflow-hidden border-2 border-gray-300 dark:border-gray-600 cursor-pointer"
              onClick={openFilePicker}
              title="Click to change profile image"
            >
              <img
                src={imageSrc || "/download.png"}
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={() => {
                if (imageSrc) {
                  localStorage.removeItem("userImage");
                  setImageSrc(null);
                } else {
                  openFilePicker();
                }
              }}
              className={`px-4 py-1 rounded-xl text-sm font-semibold transition ${
                imageSrc
                  ? "bg-gray-400 text-white hover:bg-gray-500"
                  : "bg-new-price text-white hover:opacity-90"
              }`}
            >
              {imageSrc ? "Remove Photo" : "Upload Photo"}
            </button>

            <input
              type="file"
              accept="image/*"
              ref={inputFileRef}
              onChange={onImageChange}
              className="hidden"
            />
          </div>

          <div className="flex-shrink-0">
            <AccountNav />
          </div>
        </div>

        <div className="w-full md:w-[75%] bg-gray-100 dark:bg-gray-900 p-6 text-gray-900 dark:text-gray-100 transition-colors duration-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
