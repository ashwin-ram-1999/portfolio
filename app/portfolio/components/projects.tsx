"use client";
import React from "react";
import { Layout, Col, Card } from "antd";
import { projectsStyle } from "../styles/styles";
import { PROJECT_DETAILS, Project } from "../constants/constants";

const { Content } = Layout;
const { Meta } = Card;

const projectColumn: any = (title: string, index: Project) => (
  <Col span={8}>
    <Card title={title} bordered={false} hoverable type="inner">
      <p className="text-base font-medium items-center min-h-16 justify-center items-center flex">
        {index["Tech Used"]}
      </p>
    </Card>
  </Col>
);

const Projects: React.FC = () => (
  <Layout>
    <Content style={projectsStyle}>
      <p className="text-2xl">My Projects</p>
      <div className="flex justify-around items-center gap-1">
        {PROJECT_DETAILS.map((project) => projectColumn(project.name, project))}
      </div>
    </Content>
  </Layout>
);

export default Projects;
