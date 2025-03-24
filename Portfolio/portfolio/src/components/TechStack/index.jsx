import React from "react";
import "./index.css";
import {Row, Col} from "react-bootstrap";
import { 
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHaskell,
  DiProlog,
  DiMysql,
  DiVisualstudio,
  DiDocker,
  DiRedis
} from "react-icons/di";

import { PiFigmaLogoDuotone } from "react-icons/pi";
import { 
  SiDocker,
  SiPostman,
  SiMacos,
  SiSlack,
  SiJira
 } from "react-icons/si";

 function TechStack() {
  return(
    <Row className="tech-icons-table">
      <Col xs = {4} md = {2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <DiJava />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiHaskell />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiProlog />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiReact />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col  xs = {4} md = {2} className="tech-icons">
        <DiRedis />
      </Col>
    </Row>
  );
 }

 function ToolStack() {
  return(
    <Row className="tech-icons-table">
      <Col xs = {4} md = {2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs = {4} md = {2} className="tech-icons">
        <SiJira />
      </Col>
    </Row>
  )
 }

 export {TechStack, ToolStack};