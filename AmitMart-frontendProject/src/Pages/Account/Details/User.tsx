import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";

const libraries: ("places")[] = ["places"];

function User() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", 
    libraries,
  });

  useEffect(() => {
    const savedData = localStorage.getItem("userProfile");
    if (savedData) {
      const { name, username, email, location } = JSON.parse(savedData);
      setName(name);
      setUsername(username);
      setEmail(email);
      setLocation(location);
      setSaved(true);
    }
  }, []);

  useEffect(() => {
    setSaved(false);
  }, [name, username, email, location]);

  const validateInputs = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[a-zA-Z\s]+$/.test(name)) newErrors.name = "Name must contain only letters.";
    if (!/^\w+$/.test(username)) newErrors.username = "Username must be letters, numbers or _";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateInputs()) return;

    const data = { name, username, email, location };
    localStorage.setItem("userProfile", JSON.stringify(data));
    setSaved(true);
    alert("Profile saved!");
  };

  const handleReset = () => {
    localStorage.removeItem("userProfile");
    setName("");
    setUsername("");
    setEmail("");
    setLocation("");
    setSaved(false);
    setErrors({});
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      setLocation(autocomplete.getPlace().formatted_address || "");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 px-4 md:px-20 flex flex-col gap-10 w-full"
    >
      <h1 className="text-center font-poppins font-semibold text-2xl md:text-3xl">
        PROFILE
      </h1>

      <div className="text-new-price font-poppins font-semibold text-sm flex flex-col gap-7">
   
        <InputBlock
          label="NAME"
          value={name}
          onChange={setName}
          placeholder="Enter your name"
          error={errors.name}
        />


        <InputBlock
          label="USERNAME"
          value={username}
          onChange={setUsername}
          placeholder="Enter your username"
          error={errors.username}
        />

       
        <InputBlock
          label="EMAIL"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          error={errors.email}
        />

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col gap-1 w-full"
        >
          <span className="px-1">LOCATION</span>
          {isLoaded && (
            <Autocomplete
              onLoad={(ac) => setAutocomplete(ac)}
              onPlaceChanged={onPlaceChanged}
            >
              <input
                type="text"
                className="h-10 w-full border-0 focus:outline-none bg-white dark:bg-gray-800 dark:text-white rounded-xl placeholder:text-center px-3"
                placeholder="Search location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Autocomplete>
          )}
        </motion.div>

        
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleSave}
            className={`flex-1 py-2 rounded-xl transition ${
              saved
                ? "bg-gray-400 text-gray-800 cursor-default"
                : "bg-new-price text-white hover:opacity-90 cursor-pointer"
            }`}
            disabled={saved}
          >
            {saved ? "Saved" : "Save"}
          </button>

          <button
            onClick={handleReset}
            className="flex-1 bg-gray-400 text-white py-2 rounded-xl hover:opacity-90 transition dark:bg-gray-700"
          >
            Reset
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function InputBlock({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-1 w-full"
    >
      <span className="px-1">{label}</span>
      <input
        className={`h-10 w-full border-0 focus:outline-none bg-white dark:bg-gray-800 dark:text-white rounded-xl placeholder:text-center px-3 ${
          error ? "border-2 border-red-500" : ""
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="text-red-500 text-xs px-1">{error}</span>}
    </motion.div>
  );
}

export default User;
