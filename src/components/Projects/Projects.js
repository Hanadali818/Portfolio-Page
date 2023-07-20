import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> and  
          <strong className="purple"> School Assignments </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently with the Github links coming soon.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FaceRecognition Brain"
              description="This Application is an application that utilizes the Clarifai FaceRecogntion 
              API and uses AI to recognize a face from an image the user sends though a link of an image from google. It also utilizes the
              accounts made by the user to keep track of how many times the user ran a scan with a counter."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="United Way"
              description="Produced a dashboard for the Non-Profit United Way of Rutherford and Cannon Counties to help
              them figure out what areas in the two counties were in need of more assistance from their municpal governments
              My Dashboard and presentation detailed the lack of daycare for children above the age of 5 
              espcially in areas with a high poverty rate."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MGO OutFitters"
              description="A school assignment for my 'Advanced Web-Enabled Deveolpment' class where we were given stakeholder desires 
              and our goal was the pick from the list and create a Commerce site where the manager 
              can Create, Update, and Delete for Products, Customers, Employeea,and Sales utilizing ASP.NET MVC Framework"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=" the NBA's Most Valueable Players"
              description="A school Assignment for my 'Business Analytics and Visualzation' course where we were allowed to make our own projects in Tableau 
              I chose trying to figure out the most impactful players in the NBA to find out who should be that 
              seasons MVP. I gather the dataset from Basketball Reference and worked on the data to back my finding
              ,and present this with a final dashboard."
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
