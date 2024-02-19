"use client";
import Link from "next/link";
import React from "react";
import {
  LINKEDIN_LINK,
  linkedInIcon,
  GITHUB_LINK,
  gitHubIcon,
} from "../portfolio/constants/constants";
import Layout from "../layout/Layout";

function Home() {
  return (
    <Layout>
      <div className="text-blue-300 text-4xl my-6 text-center">
        CHECK ME OUT ON
      </div>
      <div className="text-center block border border-gray-200 rounded text-gray-300 py-2 px-4 w-1/3">
        <Link href={LINKEDIN_LINK} target="_blank">
          <span className="text-4xl items-center justify-center text-center">
            LinkedIn
          </span>
          {linkedInIcon}
        </Link>
      </div>
      <div className="text-center block border border-gray-200 rounded text-gray-300 py-2 px-4 w-1/3">
        <Link href={GITHUB_LINK} target="_blank">
          <span className="text-4xl items-center justify-center text-center">
            GitHub
          </span>
          {gitHubIcon}
        </Link>
      </div>
    </Layout>
  );
}

export default Home;
