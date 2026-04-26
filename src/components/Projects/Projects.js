import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TriviaTitan from "../../Assets/Projects/trivia-titan.png";
import quizmuz from "../../Assets/Projects/quizmuz.png";
import klustr from "../../Assets/Projects/klustr.png";
import genetic from "../../Assets/Projects/genetic.png";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import laravel from "../../Assets/TechIcons/laravel.svg";
import tailwind from "../../Assets/TechIcons/Tailwind.svg";
import mysql from "../../Assets/TechIcons/mysql.svg";
import php from "../../Assets/TechIcons/php.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={klustr}
              isBlog={false}
              title="Klustr KNN Classifier"
              description="Designed and implemented a Python application that uses the K-Nearest Neighbors (KNN) algorithm to classify images stored in a PostgreSQL database. The project focused on extracting three relevant shape descriptors to reduce image dimensionality and represent data in a 3D feature space. It includes Euclidean distance computation, data normalization, and handling of training and test datasets. A Qt-based interface enables 3D visualization, parameter tuning (k), and interactive image classification."
              technologies={[
                { name: "Python", icon: Python },
                { name: "PostgreSQL", icon: SQL }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={genetic}
              isBlog={false}
              title="Genetic Algorithm Solver"
              description="Design a Python application using a genetic algorithm to solve three optimization problems: volume maximization (open box), a constrained geometric optimization problem, and a custom problem. The project includes defining solution spaces, variable domains, and appropriate fitness functions. A GUI (PySide6) allows configuration of parameters and dynamic visualization of population evolution. The system is based on a modular architecture integrating customizable strategies for selection, crossover, and mutation."
              technologies={[
                { name: "Python", icon: Python }
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizmuz}
              isBlog={false}
              title="QuizMuz"
              description="QuizMuz is a web application built with Laravel and React. It helps the students of the Conservatory of Music practice their music theory skills by providing a variety of quizzes and exercises. The application features a user-friendly interface, interactive quizzes, and a leaderboard to track student progress."
              technologies={[
                { name: "React", icon: ReactIcon },
                { name: "Laravel", icon: laravel },
                { name: "tailwind", icon: tailwind },
                { name: "MySQL", icon: mysql },
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TriviaTitan}
              isBlog={false}
              title="Trivia Titan"
              description="Trivia Titan is a progressive web app built with React and PHP. It is an online multiplayer game that allows users to compete against each other in real-time trivia quizzes. The app features a user-friendly interface, a wide range of trivia categories, and a leaderboard to track player performance."
              technologies={[
                { name: "React", icon: ReactIcon },
                { name: "PHP", icon: php },
                { name: "MySQL", icon: mysql },
              ]}
            />
          </Col>

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={suicide}*/}
          {/*    isBlog={false}*/}
          {/*    title="Ai For Social Good"*/}
          {/*    description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."*/}
          {/*    technologies={[*/}
          {/*      { name: "Python", icon: Python },*/}
          {/*      { name: "NLP" },*/}
          {/*    ]}*/}
          {/*  />*/}
          {/*</Col>*/}

          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={emotion}*/}
          {/*    isBlog={false}*/}
          {/*    title="Face Recognition and Emotion Detection"*/}
          {/*    description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.*/}
          {/*    Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."*/}
          {/*    technologies={[*/}
          {/*      { name: "Python", icon: Python },*/}
          {/*      { name: "TensorFlow" },*/}
          {/*      { name: "Keras" },*/}
          {/*      { name: "OpenCV" },*/}
          {/*    ]}*/}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
