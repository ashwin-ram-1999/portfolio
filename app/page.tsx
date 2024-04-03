"use client";
import React from "react";
import { Layout, Flex, Button } from "antd";
import { headerStyle, footerStyle } from "./portfolio/styles/styles";
import Intro from "./portfolio/components/intro";
import Projects from "./portfolio/components/projects";
import { DownloadOutlined } from "@ant-design/icons";
import Skills from "./portfolio/components/skills";

const { Header, Footer, Content } = Layout;

const App: React.FC = () => (
  <Flex gap="middle">
    <Layout>
      <Header style={headerStyle}>
        <h1 className="intro-head ">Welcome to my Digital Canvas</h1>
        <div className="flex items-center justify-center">
          <Button
            type="default"
            icon={<DownloadOutlined />}
            size={"middle"}
            target="_blank"
            href="https://flowcv.com/resume/e530o9kef5"
          >
            Download My Resume!
          </Button>
        </div>
      </Header>
      <Content>
        <Intro />
        <Skills />
        <Projects />
      </Content>
      <Footer style={footerStyle}></Footer>
    </Layout>
  </Flex>
);

export default App;
