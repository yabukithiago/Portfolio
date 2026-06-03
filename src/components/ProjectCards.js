import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

function ProjectCards(props) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.08}
      scale={1.02}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      style={{ height: "100%" }}
    >
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          {props.techStack && props.techStack.length > 0 && (
            <div className="project-tech-stack">
              {props.techStack.map((tech, index) => (
                <Badge key={index} bg="" className="tech-badge">
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          <div className="project-card-buttons">
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{ marginLeft: props.ghLink ? "10px" : "0" }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Tilt>
  );
}
export default ProjectCards;