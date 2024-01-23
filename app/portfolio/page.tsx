"use client";
import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  linkedInIcon,
  gitHubIcon,
  resumeDownload,
  INTRODUCTION_TEXT,
} from "./constants/constants";

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
        <div className="flex flex-col items-center justify-center ">
          <div className="text-gray-300 text-2xl m-4 w-3/4 my-6">
            {INTRODUCTION_TEXT}
          </div>
          <div className="text-blue-300 text-4xl my-6 text-center">
            CHECK ME OUT ON
          </div>
          <div className="text-center block border border-gray-200 rounded text-gray-300 py-2 px-4 w-1/3">
            LinkedIn
            {linkedInIcon()}
          </div>
          <div className="text-center block border border-gray-200 rounded text-gray-300 py-2 px-4 w-1/3">
            GitHub
            {gitHubIcon()}
          </div>
          <div className="bottom-4 absolute my-4">{resumeDownload()}</div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
