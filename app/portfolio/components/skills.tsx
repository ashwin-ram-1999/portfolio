"use client";
import React, { ReactNode } from "react";
import { Layout, Row, Col } from "antd";
import { contentStyle, skillsStyle } from "../styles/styles";
import {
  SKILLS_BACKEND,
  SKILLS_FRONTEND,
  SKILLS_TOOLS,
} from "../constants/image-constants";
import "../../globals.css";
import { Card } from "antd";
import { Flex } from "@/node_modules/antd/es/index";

const { Content } = Layout;

const skillsColumn: any = (title: string, skills: object) => (
  <Col span={8} className="antd-col">
    <Row gutter={[12, 16]}>
      <p className="text-2xl w-11/12 mt-1">{title}</p>
      {Object.entries(skills).map(([key, value]) => {
        return (
          <Col span={8}>
            <Card
              hoverable
              className="antd-card"
              cover={<img alt={key} src={value} />}
            >
              <p className="text-base font-medium items-center">{key}</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Col>
);

const Skills: React.FC = () => (
  <Layout>
    <Content style={skillsStyle}>
      <p className="text-3xl">My Skills</p>
      <Flex
        gap="middle"
        align="center"
        justify="
      center"
      >
        {skillsColumn("Frontend", SKILLS_FRONTEND)}
        {skillsColumn("Backend", SKILLS_BACKEND)}
        {skillsColumn("Tools", SKILLS_TOOLS)}
      </Flex>
    </Content>
  </Layout>
);

export default Skills;
