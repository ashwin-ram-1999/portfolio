"use client";
import Link from "next/link";
import React from "react";
import {
  LINKEDIN_LINK,
  linkedInIcon,
  GITHUB_LINK,
  gitHubIcon,
} from "../portfolio/constants/constants";
import { Card } from "antd";

function Home() {
  const { Meta } = Card;

  return (
    <>
      <div className="text-zinc-50 text-4xl text-center my-7">
        Check Me Out On
      </div>
      <div className="flex justify-center space-x-96 my-7">
        <Link href={LINKEDIN_LINK} target="_blank">
          <Card
            hoverable
            style={{ width: 340 }}
            cover={linkedInIcon}
            className="bg-slate-600 "
          >
            <Meta title="LinkedIn" description="www.linkedin.com" />
          </Card>
        </Link>
        <Link href={GITHUB_LINK} target="_blank">
          <Card
            hoverable
            style={{ width: 340 }}
            cover={gitHubIcon}
            className="bg-slate-600 "
          >
            <Meta title="GitHub" description="www.github.com" />
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Home;
