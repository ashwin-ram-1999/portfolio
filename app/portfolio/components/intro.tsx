"use client";
import React from "react";
import { Layout, Row, Col } from "antd";
import { contentStyle } from "../styles/styles";
import { INTRODUCTION_HEAD, INTRODUCTION_TEXT } from "../constants/constants";
import "../../globals.css";

const { Content } = Layout;

const Intro: React.FC = () => (
  <Layout>
    <Content style={contentStyle}>
      <Row className="flex justify-center">
        <Col span={24}>
          <h2 className="content-primary text-3xl mt-2 ">
            {INTRODUCTION_HEAD}
          </h2>
          <div className="text-2xl m-4 my-6 text-left">{INTRODUCTION_TEXT}</div>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Intro;
