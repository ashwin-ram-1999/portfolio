"use client";
import React from "react";
import { Layout, Row, Col } from "antd";
import { contentStyle } from "../styles/styles";

const { Content } = Layout;

const Projects: React.FC = () => (
  <Layout>
    <Content style={contentStyle}>
      <Row>My Projects</Row>
      <Row>
        <Col span={8}>1</Col>
        <Col span={8}>2</Col>
        <Col span={8}>3</Col>
      </Row>
    </Content>
  </Layout>
);

export default Projects;
