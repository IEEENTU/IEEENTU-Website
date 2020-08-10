// import React from 'react';
// // import { Switch, Route } from 'react-router-dom';

// const AboutLayout = () => {
//   return (
//     <h2>About</h2>
//   );
// }

// export default AboutLayout;

import { createMedia } from '@artsy/fresnel'
import React, { Component } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
// import { ListGroup, ListGroupItem,Jumbotron,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Collapse, CardBody, Card } from 'reactstrap';
import { ListGroup, ListGroupItem,UncontrolledCollapse , CardBody, Card } from 'reactstrap';


const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const AboutLayout = () => (
  
    <div>
        <h1 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>About Us</h1>
      <Jumbotron fluid>
        <Container fluid>
        <Row><Col xs="auto">
          <h2 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>What is IEEE?</h2>
          <p style={{textAlign:'center',fontFamily: 'Muli'}} className="lead">IEEE - The Institute of Electrical and Electronics Engineers - is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
           IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 419,000 members in over 160 countries, and its highly cited publications, conferences, technology standards,
            and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe. IEEE also has technical Societies that provide benefits to members within specialized fields of interest ranging from Aerospace to Nuclear Engineering and many more. More details about IEEE can be found <a href="https://www.ieee.org/">here.</a></p>
          </Col></Row>
        </Container>
      </Jumbotron>

      <Jumbotron fluid>
        <Container fluid>
        <Row><Col xs="auto">
          <h2 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>What is IEEE-NTU?</h2>
          <p style={{textAlign:'center',fontFamily: 'Muli'}} className="lead">We are the NTU Student Chapter of IEEE Singapore. IEEE NTU Student Branch is one of the oldest clubs in NTU with our constitution dating back to 1990. We provide opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. We offer programs, activities and professional networking opportunities that build critical skills outside of the classroom and contribute to a student’s educational, technical and professional development. We organize activities in all branches of engineering, especially electrical and electronic engineering, and computer science ranging from hackathons to coding bootcamps</p>
          </Col></Row>
        </Container>
      </Jumbotron>
      <Jumbotron fluid>
        <Container fluid>

        <Row>
          <Col xs="auto" sm="6">

            <h2 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>Our Mission</h2>
<<<<<<< HEAD
            <p style={{textAlign:'center',fontFamily: 'Muli'}} className="lead">IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.</p>
=======
            <p className="lead">To foster the spirit of innovation and promote the passion for technology among NTU students</p>
>>>>>>> 51c7f266b8ec83e2fdbb9083c0267ad0ea0d11ff
          </Col>
          <Col xs="auto" sm="6">

            <h2 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>Our Vision</h2>
<<<<<<< HEAD
            <p style={{textAlign:'center',fontFamily: 'Muli'}} className="lead">IEEE will be essential to the global technical community and to technical professionals everywhere, 
            and be universally recognized for the contributions of technology and of technical professionals in 
            improving global conditions.</p>
=======
            <p className="lead">To create a community where students learn and contribute to technological advancements to improve student life at NTU</p>
>>>>>>> 51c7f266b8ec83e2fdbb9083c0267ad0ea0d11ff

          </Col>

        </Row>
        </Container>
      </Jumbotron>
      

    {/* <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Mission
            </Header>
            <p style={{ fontSize: '1.33em' }}>
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
                </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Vision
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            IEEE will be essential to the global technical community and to technical professionals everywhere, 
            and be universally recognized for the contributions of technology and of technical professionals in 
            improving global conditions.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> */}
    <Jumbotron fluid > 
        <Container fluid>
        <Row><Col>
          <h2 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>Organizational Aims and Objectives</h2>
<<<<<<< HEAD
          <ul style={{textAlign:'center',fontFamily: 'Muli'}} className="lead">
         <li> Promote advancement of technology through our activities</li>
<li>Develop the ideals of teamwork and collaboration among our members</li>
<li>Promote work in a professional setting</li>
<li>Developing skills of leadership and management among members</li>
<li>Inspire people to get into the world of tech</li>
=======
          <ul className="lead">
         <li> To present opportunities for students to nurture educational, technical, and professional development and to promote peer-to-peer knowledge transfer and networking among students for technical education</li>
<li> To conduct technical workshops with actionable outcomes</li>
<li>To bring students together to work on community projects</li>
<li>To organize hackathons and other project-based competitions</li>
<li>To inspire people to get into the world of tech</li>
>>>>>>> 51c7f266b8ec83e2fdbb9083c0267ad0ea0d11ff
</ul>
          </Col></Row>
        </Container>
      </Jumbotron>
      <h2 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>FAQ</h2>
    <Jumbotron>
    {/* <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Toggle
    </Button> */}
    <ListGroup>
      {/* <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="info" tag="button" id="toggler">What is IEEE?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler">
      <Card outline color="info">
        <CardBody style={{fontFamily: 'Muli'}}>
        IEEE - The Institute of Electrical and Electronics Engineers - is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 419,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe. IEEE also has technical Societies that provide benefits to members within specialized fields of interest ranging from Aerospace to Nuclear Engineering and many more. More details about IEEE can be found here.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="success" tag="button" id="toggler2">What is IEEE NTU Student Branch?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler2">
        <Card outline color="success">
          <CardBody style={{fontFamily: 'Muli'}}>
          We are the NTU Student Chapter of IEEE Singapore. IEEE NTU Student Branch is one of the oldest clubs in NTU with our constitution dating back to 1990. We provide opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. We offer programs, activities and professional networking opportunities that build critical skills outside of the classroom and contribute to a student’s educational, technical and professional development. We organize activities in all branches of engineering, especially electrical and electronic engineering, and computer science ranging from hackathons to coding bootcamps. More info about our past events can be found here.
            </CardBody>
            </Card>
            </UncontrolledCollapse> */}
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="warning" tag="button" id="toggler3">Why should I join IEEE NTU Student Branch?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler3">
        <Card outline color="warning">
          <CardBody style={{fontFamily: 'Muli'}}>
            <ul>
         <li> Learn the importance of teamwork and collaboration</li>
<li>Develop management and leadership skills</li>
<li>Learn to work in a professional setting</li>
<li>Build awesome technical projects along with our tech team</li>
<li>Share your ideas on our blog</li>
</ul>
At IEEE NTU Student Branch, we are always open to brilliant ideas and creativity, alongside providing a safe space for growth. We ensure that each and every member of our family is able to work comfortably with appropriate help and support.

And yes, we give CCA points as well!

            </CardBody>
            </Card>
            </UncontrolledCollapse>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="danger" tag="button" id="toggler4">What are the roles available?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler4">
        <Card outline color="danger">
          <CardBody style={{fontFamily: 'Muli'}}>
          <p>Whether you’re an experienced coder with tons of repositories on Github or you’re not about that 0’s and 1’s life, there’s a place for everyone to develop and shine in our tight-knit family of a club - be it tech, business, logistics, liaison or publicity.</p>
            <p><strong>Technology Officer</strong> - If you're passionate about the tech world and have a knack for all things binary, this is the committee for you! Join the tech committee to create and conduct tech-based workshops, mentor teams during coding events and competitions hosted by the club, explore projects with like-minded tech enthusiasts in any field and so much more!</p>
            <p><strong>Business Officer</strong> - Calling all the Harvey Specters of the world ready to make a pitch anytime! As part of the business committee, you'll be directly involved in acquiring sponsors for events hosted by the club and developing effective growth strategies for the club and its partnerships in the industry.</p>
            <p><strong>Liaison Officer</strong> - If the responsibilities of immersing yourself in external communications to directly drive the participation numbers at our events excites you, this is the committee for you! As a member of the liaison committee, you'll be responsible for overseeing the outreach of the club with other universities, schools and technical clubs for all the club's events!</p>
            <p><strong>Logistics Officer</strong> - The backbone of the club and all its events! Join the logistics committee to chart strategies for event operations and logistics, facilitate outreach to a variety of vendors and oversee the flow of all club events! If you thrive under time pressure and resource constraints to find innovative solutions to operational challenges, this is the right fit for you!</p>
            <p><strong>Publicity Officer</strong> - A picture is worth a thousand words, but are you the one behind the picture? As part of the publicity committee, you'll be directly responsible for crafting strategies for promoting the club and its events, as well as handling the club's social media presence. Join the publicity committee and let your inner Picasso loose- photoshop not required!</p>  
            </CardBody>
            </Card>
            </UncontrolledCollapse>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="primary" tag="button" id="toggler5">Who can join IEEE NTU Student Branch?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler5">
        <Card outline color="primary">
          <CardBody style={{fontFamily: 'Muli'}}>
            <p>As long as you are a NTU student and are passionate about our mission and vision, you are welcome to join us!</p>
            </CardBody>
            </Card>
            </UncontrolledCollapse>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="success" tag="button" id="toggler6">I have a question that is not listed here?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler6">
        <Card outline color="success">
          <CardBody style={{fontFamily: 'Muli'}}>
            <p>You can drop any queries you have at <a href="mailto:ieeentuchapter@gmail.com">ieeentuchapter@gmail.com</a></p>
            </CardBody>
            </Card>
            </UncontrolledCollapse>
    </ListGroup>
    </Jumbotron>
{/* 
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Organizational Aims and Objectives
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          ***Add Text***
        </p>

      </Container>
    </Segment> */}
  </div>
)

export default AboutLayout;
