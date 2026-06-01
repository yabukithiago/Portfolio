import React from "react";
import Card from "react-bootstrap/Card";
import { FaAngleDoubleRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="green">Thiago Yabuki de Araujo </span>
            from <span className="green"> São Paulo, Brazil.</span>
            <br />
            <br />
            I'm currently doing a degree in <i>
              Computer Systems Engineering
            </i>{" "}
            at the <i>Instituto Politécnico do Cavado e do Ave (IPCA)</i> in{" "}
            <i>Portugal.</i>
            <br />
            <br />
            My journey into the world of programming began during my studies as
            an electronics technician, where I discovered programming while
            working on Arduino projects and writing simple programs in{" "}
            <b className="green">C++.</b>
            &nbsp;This simple experience sparked my interest in solving problems
            through code, mixing electronics with the art of programming.
            &nbsp;Since then, I have been motivated by the desire to create,
            innovate and constantly learn new skills in the ever-evolving
            technological landscape. I'm excited to apply my knowledge to
            develop solutions that have a real impact!
            <br />
            <br />
            I am currently doing an internship at{" "}
            <span className="green">Hestia Technology</span>, where I work with{" "}
            <b className="green">Golang</b> and{" "}
            <b className="green">Angular</b> to build and maintain backend
            services and web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaAngleDoubleRight /> Playing Games
            </li>
            <li className="about-activity">
              <FaAngleDoubleRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
