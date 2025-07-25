import React from "react";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="min-h-screen px-6 py-12 md:px-10 lg:px-32 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Me</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Learn more about who I am and where I studied.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-100 dark:bg-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
            Hi, I'm{" "}
            <span className="font-bold">Shady Yasser Ahmad Elsebay</span>, a
            passionate front-end developer with a strong interest in building
            modern, responsive, and user-friendly web applications. I enjoy
            writing clean code, solving UI/UX challenges, and continuously
            learning new technologies to improve my skills.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-100 dark:bg-gray-700 p-6 md:p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            About Amit Learning
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-justify">
            I had the privilege of learning front-end development at{" "}
            <a
              href="https://amit-learning.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
            >
              Amit Learning
            </a>
            , a well-known educational center that empowers students with
            real-world skills and hands-on experience. The supportive
            instructors and practical approach helped me understand technologies
            like HTML, CSS, JavaScript, React, Tailwind CSS, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
