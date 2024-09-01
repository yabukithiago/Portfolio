import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import myImg from "../resources/perfil.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey into the world of programming began during my studies
              as an electronics technician, where i discovered programming while
              working on Arduino projects and writing simple programs in{" "}
              <b className="green">C++.</b>
              &nbsp;This simple experience sparked my interest in solving
              problems through code, mixing electronics with the art of
              programming. &nbsp;Since then, I have been motivated by the desire
              to create, innovate and constantly learn new skills in the
              ever-evolving technological landscape. I'm excited to apply my
              knowledge to develop solutions that have a real impact!
              <br />
              I'm currently doing a degree in{" "}
              <i>Computer Systems Engineering</i> at the{" "}
              <i>Polytechnic Institute of Cavado and Ave</i> in <i>Portugal.</i>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="green">C#</b> and{" "}
              <b className="green">Javascript Library and Frameworks.</b>
              &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="">
            <h1 className="project-heading">
              My Skills<strong className="green"> Technologies</strong>
            </h1>
            <Techstack />
            <h1 className="project-heading">
              <strong className="green">Tools</strong> I use
            </h1>
            <Toolstack />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yabukithiago"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/thiago-yabuki/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yabukithiago@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
