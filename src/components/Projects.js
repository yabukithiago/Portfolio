import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import hestia from "../resources/loginhestia.png";
import digisocial from "../resources/digisocial.png";

function Projects() {
  return (
    <Container fluid className="home-about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="green">Projects </strong>
        </h1>
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

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={digisocial}
              title="DigiSocial"
              description="DigiSocial project was created to address management challenges at the Loja Social de São Lázaro e São João do Souto in Braga, identified through discussions with its administrator, Mrs. Tânia Cruz. It aims to simplify tasks such as managing beneficiaries, volunteers, orders, and visits. The solution involves developing a Kotlin-based mobile app, integrated with a database, to streamline administration and enhance communication among staff, volunteers, and beneficiaries."
              ghLink="https://github.com/yabukithiago/DigiSocial"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
