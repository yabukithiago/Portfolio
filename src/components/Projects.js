import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import hestia from "../resources/loginhestia.png";

function Projects() {
  return (
    <Container fluid className="home-about-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          My <strong className="green">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={hestia}
              title="Hestia Technology"
              description="Hestia Technology is an academic project that simulates a company specializing in the efficient management of consultancies, providing innovative and technological solutions to optimize processes, increase operational efficiency and boost the success of our clients."
              ghLink="https://github.com/yabukithiago/Hestia-Technology"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;