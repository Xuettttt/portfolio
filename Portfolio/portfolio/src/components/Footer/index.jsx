import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";
import {Row, Col} from "react-bootstrap";
import { FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

function Footer() { 
  let date = new Date();
  let year = date.getFullYear();
  return(
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Xueting Zhao</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <ul>
            <li>
              <a href="https://www.instagram.com/xueeettt/"
                 style={{ color: "white" }}
                 target="_blank">
                <FiInstagram />
              </a>
            </li>
            <li>
              <a href = "https://www.linkedin.com/in/xueting-zhao-50a894263/"
                 style={{ color: "white" }}
                 target="_blank">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href = "https://www.facebook.com/profile.php?id=100082755198777"
                 style={{ color: "white" }}
                 target="_blank">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;