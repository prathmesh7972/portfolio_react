import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              // imgPath={suicide}
              isBlog={false}
              title="Realtime Chat App"
              description="React for frontend for interactive UI, enabling users to
              communicate .Utilized Node.js and Socket.io on the backend
              to manage real-time communication bet clients and server,
              ensuring fast communication.
              responsive application deployed on Heroku.
              "
              ghLink="https://github.com/prathmesh7972/chat-application"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Expense Manager"
              description="Developed a mobile application using Flutter and Dart to manage personal expenses.
              The application includes features such as adding, editing, and deleting expenses, as well as generating reports and graphs
              to visualize spending habits."
              ghLink="https://github.com/prathmesh7972/flutter_expense_manager"
              demoLink="https://expensesmanagerr.netlify.app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="DrawVerse"
              description="DrawVerse is user-friendly online drawing web-app . With a
              wide range of brushes, artists can create stunning artwork
              and collaborate with others. designed with a responsive
              interface for seamless drawing on different devices.
              Tech: HTML,CSS,JS"
              ghLink="https://github.com/prathmesh7972/drawing_web"
              demoLink="https://drawverse.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="Effective Waste Management"
              description="Designed and developed a smart dustbin using Arduino that automatically opens its lid when a user approaches it.
              The dustbin lid is controlled by an ultrasonic sensor that detects the user’s proximity and opens the lid accordingly. The
              includes an LED indicator to alert when it is full
              (Arduino, ultrasonic sensor, LED indicator)"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Word Dictonary"
              description="A online dictionary website developed using HTML, CSS, and
              JavaScript. Features extensive word definitions, synonyms,
              antonyms, examples, and pronunciation guides. Offers userfriendly interface. Provides phrasal verbs, and. Responsive
              design"
              ghLink="https://github.com/prathmesh7972/dictonary_"
              demoLink="https://dictonaryweb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Weather app"
              description="The weather app I developed using Flutter provides real-time weather information for a given city. It utilizes a free weather API to retrieve and display the current weather conditions, including temperature, humidity, wind speed, and more. "
              ghLink="https://github.com/prathmesh7972/weatherapp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="RailReserve (Group Project)"
              description="Built with React, Firebase, offer functionality for convenient
              train ticket booking. Users can search for available trains,
              select seats, and make reservations. The system integrates
              with Firebase to securely store user data and ticket
              information."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
