import React,{Component} from 'react';
import {
  Card, CardImg,CardHeader, CardText, CardBody,CardDeck,Jumbotron, Container, Row, Col, UncontrolledCarousel 

} from 'reactstrap';
import logo from '../logo.png';
import Fade from 'react-reveal/Fade';

const hack2019 = [
    {
      src: '',
      key: '1'
    },
    {
      src: '',
      key: '2'
    },
    {
        src: '',
        key: '3'
      },
      {
        src: '',
        key: '4'
      },
      {
        src: '',
        key: '5'
      },
      {
        src: '',
        key: '6'
      },
      {
        src: '',
        key: '7'
      },
    
  ];

  const ieelrn2019 = [
    {
      src: '',
      key: '1'
    },
    {
      src: '',
      key: '2'
    },
    {
        src: '',
        key: '3'
      },
      {
        src: '',
        key: '4'
      },
      {
        src: '',
        key: '5'
      },
      {
        src: '',
        key: '6'
      },
      {
        src: '',
        key: '7'
      },
    
  ];

const Events = (props) => {
    return (
      <div>
        <Fade>
            <h1 style={CustomStyle}>Upcoming Events</h1>
            <p style={CustomStyle}>Just a glimpse of some of the amazing events we've planned for the academic year!</p>
          </Fade>
        <Fade>
      <CardDeck>
        <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">iNTUition 7.0</CardHeader>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
          <CardText>
          Our flagship event, iNTUition is NTU's only student-run 24 hour hackathon, with sponsors like HP, Google, SEA, Blackrock, PayPal and Redbull over
          the years since its conception in 2014. iNTUition v6.0 in 2019 saw over 300 participants! </CardText>
          </CardBody>
        </Card>
        <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">Techathlon</CardHeader>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
          <CardText>
             A real tech bonanza to look out for this year, filled with projects and workshops on Computer Vision, Data Science, Client and Server side programming,
             Git and Cyber security among others, with the opportunity to collaborate with other clubs in NTU! </CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <br></br>
      <CardDeck>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">Blog @ IEEE-NTU</CardHeader>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
          <CardText>
            Learn something new, or even share something you know yourself! Starting this year, we're introducing a bimonthly blog for all club members
            to contribute on a topic of their choice. Come on, explore that creative writing side of yours! </CardText>
          </CardBody>
        </Card>

        <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">Outreach</CardHeader>
          <CardImg top width="100%" src={logo} alt="Card image cap" />
          <CardBody>
          <CardText>
            At IEEE NTU Student Branch, we firmly believe in giving back to the community in whatever way possible. We look forward to seeing you at the
            tech and non-tech volunteer events we take part in and really make a difference in this world!</CardText>
          </CardBody>
        </Card>
      </CardDeck>
      <br></br>
      </Fade>
    </div>
    <div>
        <h1 style={CustomStyle}>What we did in 2019!</h1>
        <Row>
             <Col> 
        <Jumbotron fluid>
          
            <h4 className="display-3">iNTUition v6.0</h4>
            <p className="lead">Our flagship hackathon, iNTUition v6.0 saw over 200 participants who all went back with sweet memories to cherish . Apart from the very informative workshpos we had on APIs, Data Science and Machine learning,
            the event produced some amazing hardware, AI and cloud hacks. The spectacular event offered some amzing prizes and merch from a wide range of sponsorers including HP, 
            Digital Ocean, Google, Zalora, 12Geeks etc. </p>
                
        </Jumbotron>
        </Col> 

        <Col>
        <UncontrolledCarousel items={hack2019} /> 
        
        </Col> 

        </Row>

        <Row>
             <Col> 
        <Jumbotron fluid>
          
            <h4 className="display-3">IEEELearn 2019</h4>
            <p className="lead">IEEELearn 2019 was an introductory level workshop series with the main aim of equiping the participants with the skills required for the very important
            data science, machine learning and AI needed in this era. True to its aim, all participants enjoyed learning the basics of Python, and Data analysis </p>
                
        </Jumbotron>
        </Col> 

        <Col>
        <UncontrolledCarousel items={ieelrn2019} /> 
        
        </Col> 

        </Row>
    </div>
    );
  };

  export default Events;
