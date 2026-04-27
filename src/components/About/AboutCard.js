import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Eric El-Chabab</span>{" "}
            from <span className="purple">Montreal, Canada</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Software Engineer</span> student at{" "}
            <span className="purple">École de Technologie Supérieure</span>.
            <br />I hold a Bachelors degree in{" "}
            <span className="purple">Music - Guitar</span> from the{" "}
            <span className="purple">Quebec's Conservatory of Music</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking and Nature Walks 🌲
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning ideas into impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer">chababeric</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
