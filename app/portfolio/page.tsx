"use client"
import React, { useState } from "react";
import Layout from "./Layout";

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
            {darkMode ? <div> Light Mode</div> : <div> Dark Mode</div>}
          </div>
        </label>
      </div>
      <Layout><div className="text-gray-300">SAMPLE TEXT</div></Layout>
    </div>
  );
}

export default Home;