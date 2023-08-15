import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently pursuing BTech. in Information Technology and Engineering
              at Pimpri Chinchwad College of
              Engineering, Pune. My current CGPA is <i><b className="purple">8.9/10</b></i>  and I will graduate in June 2024.
              <br />
              <br />
              I am a <b className="purple">technology enthusiast</b>  and <b className="purple">dedicated engineer</b>  with a <b className="purple">problem-solving mindset</b>  .
              <br />
              <br />
              I possess a strong foundation in core computer science concepts and programming languages such as <b className="purple">C/C++, Java, JavaScript, Python, SQL, and HTML/CSS.</b> 
              <br />  
              I am experienced in working with libraries/frameworks like <b className="purple">React.js, Node.js, Flutter.</b>  databases like <b className="purple">MySQL,Firebase,</b>  and developer tools including <b className="purple">Git/GitHub and VS Code.</b> 
              <br />
              <br />
              My expertise allows me to develop <b className="purple"> efficient and high-quality software solutions</b>  while keeping up with the latest industry trends.
              <br />
              <br />
              {/* Outside of work, I enjoy <b className="purple">watching movies, listening songs</b> and exploring new destinations through <b className="purple">travel</b>. */}
            </p>
           
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/prathmesh7972"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prathmesh-gaikwad-b54191210/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/prathmesh_7972/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
