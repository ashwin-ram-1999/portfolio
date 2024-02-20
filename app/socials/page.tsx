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
import { Card } from "antd";

function Home() {
  const { Meta } = Card;

  return (
    <Layout>
      <div className="text-zinc-50 text-4xl text-center my-7">
        Check Me Out On
      </div>
      <div className="flex justify-center space-x-96 my-7">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={linkedInIcon}
          className="bg-slate-600 "
        >
          <Link href={LINKEDIN_LINK} target="_blank">
            <Meta title="LinkedIn" description="www.linkedin.com" />
          </Link>
        </Card>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={gitHubIcon}
          className="bg-slate-600 "
        >
          <Link href={GITHUB_LINK} target="_blank">
            <Meta title="GitHub" description="www.github.com" />
          </Link>
        </Card>
      </div>
    </Layout>
  );
}

export default Home;
