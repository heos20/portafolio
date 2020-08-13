import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import { Parallax } from 'react-parallax';
import { Link, animateScroll as scroll } from 'react-scroll'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import slide1 from './static/img/carousel-1.png'
import slide2 from './static/img/carousel-2.png'
import slide3 from './static/img/carousel-3.png'

import preview1 from './static/img/preview-messebau.png'
import preview2 from './static/img/preview-skillup.png'
import preview3 from './static/img/preview-messebau-virtual.png'

import logoHeos from './static/img/logo-heos.png'
import logoProto from './static/img/logo-proto.png'

function App() {
  return (
    <div className="App"> 
      <Parallax
        bgImage={require('./static/img/bg-1.png')}
        bgImageAlt="Héctor Ontiveros Sánchez"
        strength={850}
      >
        <Container style={{height:'100vh'}}>
          <Row className="h-100">
            <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <div className="heading-wrapper p-5">
                <h1 className="mb-4 text-center text-md-left">Héctor Ontiveros Sánchez</h1>
                <h3 className="d-flex align-items-center text-center text-md-left">
                  <img src={logoHeos} alt="kodemia.mx" />
                  <span className="ml-4">Ing. en Sistemas Computacionales</span>
                </h3>
                <h3 className="d-flex align-items-center text-center text-md-left">
                  <img src={logoProto}></img>
                  <span className="ml-4">Developer</span>                  
                </h3>
                <div className="btn-wrapper d-flex flex-column justify-content-between mt-4 flex-md-row">
                  <Link to="about" smooth={true}>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Acerca de mí</div>                    
                  </Link>
                  <Link to="projects" smooth={true}>
                    <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Proyectos</div>
                  </Link>
                  
                  <div className="btn btn-secondary flex-grow-1 mx-3 mb-2">Contáctame</div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              
            </Col>
          </Row>
        </Container>
      </Parallax>
      <Container fluid id="about" className="h-100-vh">
        <Row className="h-100">
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <h3 className="mb-5">Sobre mí</h3>
              <p>Egresado del Centro Educacional y Desarrollo en Informática Personal (CEDIP).
                Actualmente trabajo en el Instituto Politécnico Nacional (IPN) en el área de 
                Informática en un Centro de Investigación en la Ciudad de Altamira, Tamaulipas,
                con una experiencia de laboral de 20 años.</p>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>          
      <Container fluid id="projects" className="bg-gray h-100-vh">
        <Row>
          <Col xs="12">
            <Container>
              <Row>
                <Col xs="12">
                  <h1 className="text-center my-5">Proyectos</h1>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="4">
                  <div className="project-wrapper">
                    <a href="https://www.com" target="_blank">
                      <img className="w-100" src={preview1} target="_blank" alt="" />
                      <div className="project-caption">
                        <h3 className="project-title text-center">Messebau Virtual Website</h3>
                        <h4 className="project-technologies text-center">HTML, CSS, JQuery</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col xs="12" md="4">
                  <div className="project-wrapper">
                    <a href="https://www.com" target="_blank">
                      <img className="w-100" src={preview2} target="_blank" alt="" />
                      <div className="project-caption">
                        <h3 className="project-title text-center">Messebau Virtual Website</h3>
                        <h4 className="project-technologies text-center">HTML, CSS, JQuery</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                <Col xs="12" md="4">
                  <div className="project-wrapper">
                    <a href="https://www.com" target="_blank">
                      <img className="w-100" src={preview3} target="_blank" alt="" />
                      <div className="project-caption">
                        <h3 className="project-title text-center">Messebau Virtual Website</h3>
                        <h4 className="project-technologies text-center">HTML, CSS, JQuery</h4>
                      </div>
                    </a>
                  </div>
                </Col>
                {

                }
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
