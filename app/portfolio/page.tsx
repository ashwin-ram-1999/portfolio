"use client";
import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  linkedInIcon,
  gitHubIcon,
  resumeDownload,
  INTRODUCTION_TEXT,
} from "./constants/constants";
import "./portfolio.css";

function Home() {
  return (
    <div>
      <div className="flex align-center justify-between">
        <h1 className="font-sans text-5xl m-10 text-gray-200">Ashwin Ram</h1>
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
            <a
              href="https://in.linkedin.com/in/ashwin-ram-605123197"
              target="_blank"
            >
              <span className="text-4xl items-center justify-center text-center">
                LinkedIn
              </span>
              {linkedInIcon()}
            </a>
          </div>
          <div className="text-center block border border-gray-200 rounded text-gray-300 py-2 px-4 w-1/3">
            GitHub
            {gitHubIcon()}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
