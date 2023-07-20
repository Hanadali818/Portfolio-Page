import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Hanad Ali </span>
            I am from <span className="purple"> Nashville, Tennessee in the USA.</span>
            <br /> I am a final year student in my graduate program for Information systems
            at Middle Tennessee State University.
            <br />
            Additionally, I Spent the last year working as a Graudate Assitant at MTSU.
            <br />
            <br />
            Some of the relevant coursework I've taken are: 
          </p>
          <ul>
            <li className="about-activity" >
              <ImPointRight /> SQL for ETL and Analytics - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> Database Design and Development - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> Seminar in Database Management - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> Applied Business Analytics - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> Data Mining Predictive Analytics - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> Advanced Web-Enabled Application Devolpment - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> The Complete Web Developer in 2023 - Udemy
            </li>
            <li className="about-activity">
              <ImPointRight /> Information Systems Analysis and Design - MTSU
            </li>
            <li className="about-activity">
              <ImPointRight /> Business Analytics and Visualzation - MTSU
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
