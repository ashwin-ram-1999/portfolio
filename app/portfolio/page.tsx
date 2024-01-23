"use client";
import React, { useState } from "react";
import Layout from "../layout/Layout";

function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div>
      <div className="flex align-center justify-between">
        <h1 className="font-sans text-5xl m-10 text-gray-200">My Portfolio</h1>
        <label
          htmlFor="toggleB"
          className="flex items-center cursor-pointer mr-5"
        >
          <div className="relative">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => {
                console.log(darkMode);
                setDarkMode(!darkMode);
              }}
              id="toggleB"
              className="sr-only"
            />
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 text-xs text-gray-300">
            Toggle for
            {darkMode ? <div>Light Mode</div> : <div> Dark Mode</div>}
          </div>
        </label>
      </div>
      <Layout>
        <div className="flex justify-center">
          <div className="text-gray-300 text-2xl m-4 w-3/4">
            Hi! I am Ashwin Ram. As a Full Stack Developer, I develop, test, and
            deploy web applications using Java, Spring Boot and ReactJs. I work
            with a team of 5 developers and QA engineers to deliver high-quality
            software solutions for clients in various domains, such as banking,
            healthcare, and education. I am passionate about learning new
            technologies and applying them to real-world problems. My goal is to
            become a proficient and innovative full stack developer who can
            create impactful and user-friendly applications.
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
