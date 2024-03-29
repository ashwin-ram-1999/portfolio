"use client";
import React from "react";
import { Layout, Flex, Button } from "antd";
import {
  headerStyle,
  footerStyle,
  downloadButtonStyle,
} from "./portfolio/styles/styles";
import Intro from "./portfolio/components/intro";
import Projects from "./portfolio/components/projects";
import { DownloadOutlined } from "@ant-design/icons";

const { Header, Footer, Content } = Layout;

const App: React.FC = () => (
  <Flex gap="middle">
    <Layout>
      <Header style={headerStyle}>
        Welcome to my Digital Canvas
        <a
          href="https://flowcv.com/resume/e530o9kef5"
          download="Ashwin's Resume"
          target="_blank"
          className="flex items-center"
        >
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size={"middle"}
            style={downloadButtonStyle}
          >
            Download My Resume!
          </Button>
        </a>
      </Header>
      <Content>
        <Intro />
        <Projects />
      </Content>
      <Footer style={footerStyle}>
        Footer <br />
        Social 1, Social 2
      </Footer>
    </Layout>
  </Flex>
);

export default App;
