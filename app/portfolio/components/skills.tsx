"use client";
import React from "react";
import { Layout, Row, Col } from "antd";
import { skillsStyle } from "../styles/styles";
import {
  SKILLS_BACKEND,
  SKILLS_FRONTEND,
  SKILLS_TOOLS,
} from "../constants/image-constants";
import "../../globals.css";
import { Card } from "antd";

const { Content } = Layout;

const skillsColumn: any = (title: string, skills: object, span: number) => (
  <Col span={8} className="antd-col">
    <Row gutter={[12, 16]}>
      <p className="text-2xl w-11/12 mt-1">{title}</p>
      {Object.entries(skills).map(([key, value]) => {
        return (
          <Col span={span}>
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
      <div className="flex justify-around items-center gap-1">
        {skillsColumn("Frontend", SKILLS_FRONTEND, 8)}
        {skillsColumn("Backend", SKILLS_BACKEND, 12)}
        {skillsColumn("Tools", SKILLS_TOOLS, 12)}
      </div>
    </Content>
  </Layout>
);

export default Skills;
