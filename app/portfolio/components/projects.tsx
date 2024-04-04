"use client";
import React from "react";
import { Layout, Col, Card, Flex, Row } from "antd";
import { projectsStyle } from "../styles/styles";
import { PROJECT_DETAILS, Project } from "../constants/constants";

const { Content } = Layout;

const projectColumn: any = (title: string, index: Project) => (
  <Col span={8}>
    <Card title={title} bordered={false} hoverable>
      <p className="text-base font-medium items-center">
        {index["Skills Used"]}
      </p>
    </Card>
  </Col>
);

const Projects: React.FC = () => (
  <Layout>
    <Content style={projectsStyle}>
      <p className="text-2xl">My Projects</p>
      <Flex
        gap="middle"
        align="center"
        justify="
      space-around"
      >
        {PROJECT_DETAILS.map((project) => projectColumn(project.name, project))}
      </Flex>
    </Content>
  </Layout>
);

export default Projects;
