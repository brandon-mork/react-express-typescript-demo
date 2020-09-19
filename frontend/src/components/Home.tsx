import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Routes from '../constants/routes';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header></Header>
      <Container className="text-center mt-5">
        <h1>Public-Interest Software Engineer</h1>
        <h2>Hi! I'm Brandon, a senior full-stack engineer focused on tech that promotes the public interest.</h2>
        <div>This React.js single-page-application frontend is built on top of an Express.js backend.</div>
        <div>
          <Link to={Routes.Login}>Check out the demo!</Link>
        </div>
        <Row className="mt-5">
          <Col>
            <Jumbotron className="h-100">
              <h3>Impact</h3>
              <span>
                Leading the team that created Abrigo's Small Business Administration Lending product, my team and I contributed to the funding of more than
                1,000,000 jobs during the Covid-19 pandemic by helping community financial institutions streamline the processing of 100,000+ Paycheck
                Protection Program loans.
              </span>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron className="h-100">
              <h3>Experience</h3>
              <div>
                Founder and lead of Abrigo's frontend architecture committee- designed and transitioned team to Vue.js & TypeScript architecture, replacing
                AngularJS & jQuery.
              </div>
              <div className="my-2">
                Project lead for teams of up to sixteen engineers, including technical design, review of code produced by team, and multi-project resource
                management.
              </div>
              <div>Manager of four engineers, including performance reviews and regular one- on-one meetings to facilitate growth.</div>
            </Jumbotron>
          </Col>
          <Col>
            <Jumbotron className="h-100">
              <h3>Hobbies</h3>
              <ul>
                <li>Biking</li>
                <li>Reading</li>
                <li>Cooking</li>
                <li>Storytelling</li>
                <li>
                  Side Project:{' '}
                  <a href="https://friendsvoteusa.com/" target="_blank" rel="noopener noreferrer">
                    Getting Your Friends to Vote
                  </a>
                </li>
              </ul>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
