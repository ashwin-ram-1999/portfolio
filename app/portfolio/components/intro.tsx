"use client";
import React from "react";
import { Layout, Flex, Row, Col } from "antd";
import { contentStyle } from "../styles/styles";
import {
  INTRODUCTION_HEAD,
  INTRODUCTION_TEXT,
  SKILLS_IMAGES,
} from "../constants/constants";
import "../../globals.css";
import { Card } from "antd";

const { Meta } = Card;

const { Content } = Layout;

const Intro: React.FC = () => (
  <Layout>
    <Content style={contentStyle}>
      <Row>
        <Col span={18}>
          <h2 className="content-primary text-2xl mt-2">{INTRODUCTION_HEAD}</h2>
          <div className="text-2xl m-4 my-6 text-left">{INTRODUCTION_TEXT}</div>
        </Col>
        <Col span={6}>
          <p className="flex justify-center text-xl w-11/12 m-auto">
            My Skills
          </p>
          <Row gutter={[8, 8]}>
            {Object.entries(SKILLS_IMAGES).map(([key, value]) => {
              return (
                <Col span={8}>
                  <Card
                    hoverable
                    style={{ width: "8rem", height: "8rem" }}
                    cover={<img alt={key} src={value} />}
                  >
                    <p className="text-lg justify-center mt-1 flex">{key}</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Content>
  </Layout>
);

export default Intro;
