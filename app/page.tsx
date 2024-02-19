import React from "react";
import Layout from "./layout/Layout";
import { INTRODUCTION_TEXT } from "./portfolio/constants/constants";

function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center ">
        <div className="text-gray-300 text-2xl m-4 w-3/4 my-6">
          {INTRODUCTION_TEXT}
        </div>
        <div className="text-blue-300 text-4xl my-6 text-center">
          My Experience
        </div>
      </div>
    </Layout>
  );
}

export default Home;
