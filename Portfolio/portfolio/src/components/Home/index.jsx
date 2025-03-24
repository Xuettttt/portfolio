import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css"; 
import {TechStack, ToolStack} from "../TechStack/index"

function Home() {

  const fullText = "I'm looking for opportunities to contribute my skills and grow as a developer in a dynamic and collaborative environment.";
  
  const [displayText, setDisplayText] = useState(""); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true); 

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="home">
      <Container>
        <Row>
          <Col className="content-container">  
            <div id="female-programmer" className="image-container"></div>

            <div className="content-1">
              <div className="text-container">
                Hello! I Am 
                <span className="name"> Xueting Zhao </span>
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
              </div>  

              <div className="intro">
                Results-oriented and innovative Software Engineer with extensive experience in both front-end and back-end web application development.
              </div>
              <div className="intro">
                Proficient in Java, JavaScript, React, SpringBoot, and other modern technologies. Demonstrated expertise in data analysis, information visualization, full-stack development, and distributed system architecture. Software Developer
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="keywords">
              {displayText}
              <span className={`cursor ${showCursor ? "blink" : "color:white"}`}>|</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <div className="heading">
                Professional <strong className="purple">Skillset</strong>
              </div>
              <TechStack/>
            </Col>
        </Row>
        <Row>
          <Col>
              <div className="heading">
                <strong className="purple">Tools</strong> I Use
              </div>
              <ToolStack />
            </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;