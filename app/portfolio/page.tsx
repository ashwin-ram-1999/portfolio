"use client";
import React from "react";
import Layout from "../layout/Layout";
import { INTRODUCTION_TEXT, MY_SOCIALS } from "./constants/constants";
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
          {MY_SOCIALS}
        </div>
      </Layout>
    </div>
  );
}

export default Home;
