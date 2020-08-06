import React, { useState } from 'react';
import {
  Card, CardImg,CardHeader, CardText, CardBody,CardDeck,Jumbotron, Container, Row, Col,   Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption

} from 'reactstrap';
import logo from '../logo.png';
import blog from '../static/logos/blog.jpg';
import techathlon from '../static/logos/techathlon.jpg';
import outreach from '../static/logos/outreach.jpg';
import iNTUition from '../static/logos/iNTUition.png';
import Fade from 'react-reveal/Fade';
import hk1 from '../static/intuition 2019/pic1.jpg';
import hk2 from '../static/intuition 2019/pic2.jpg';
import hk3 from '../static/intuition 2019/pic3.jpg';
import hk4 from '../static/intuition 2019/pic4.jpg';
import hk5 from '../static/intuition 2019/pic5.jpg';
import hk6 from '../static/intuition 2019/pic6.jpg';
import hk7 from '../static/intuition 2019/pic7.jpg';
import hk8 from '../static/intuition 2019/pic8.jpg';
import lrn1 from '../static/ieeelearn 2019/pic1.jpg';
import lrn2 from '../static/ieeelearn 2019/pic2.jpg';
import lrn3 from '../static/ieeelearn 2019/pic3.jpg';
import lrn4 from '../static/ieeelearn 2019/pic4.jpg';
import lrn5 from '../static/ieeelearn 2019/pic5.jpg';
import lrn6 from '../static/ieeelearn 2019/pic6.jpg';


const CustomStyle ={
  fontFamily: 'Muli',
  textAlign:'center'
  // color:'black'
}

const hack2019 = [
    {
      src: hk1,
      key: '1'
      
    },
    {
      src: hk2,
      key: '2'
    },
    {
        src: hk3,
        key: '3'
      },
      {
        src: hk4,
        key: '4'
      },
      {
        src: hk5,
        key: '5'
      },
      {
        src: hk6,
        key: '6'
      },
      {
        src: hk7,
        key: '7'
      },

      {
        src: hk8,
        key: '8'
      }
    
  ];

  const ieelrn2019 = [
    {
      src: lrn1,
      key: '1'
    },
    {
      src: lrn2,
      key: '2'
    },
    {
        src: lrn3,
        key: '3'
      },
      {
        src: lrn4,
        key: '4'
      },
      {
        src: lrn5,
        key: '5'
      },
      {
        src: lrn6,
        key: '6'
      }
  ];

const Events = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next1 = () => {
    if (animating) return;
    const nextIndex = activeIndex === ieelrn2019.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous1 = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? ieelrn2019.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides1 = ieelrn2019.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
        
      </CarouselItem>
    );

    
  });

  const next2 = () => {
    if (animating) return;
    const nextIndex = activeIndex === hack2019.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous2 = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? hack2019.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides2 = hack2019.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src}  />
      </CarouselItem>
    );
  });

    return (
      <div>
      <div>
        <Fade>
            <h1 style={CustomStyle}>Upcoming Events</h1>
            <p style={CustomStyle}>Just a glimpse of some of the amazing events we've planned for the academic year!</p>
          </Fade>
        <Fade>
      <CardDeck>
        <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">iNTUition 7.0</CardHeader>
          <CardImg top width="100%" src={iNTUition} alt="Card image cap" />
          <CardBody>
          <CardText>
          Our flagship event, iNTUition is NTU's only student-run 24 hour hackathon, with sponsors like HP, Google, SEA, Blackrock, PayPal and Redbull over
          the years since its conception in 2014. iNTUition v6.0 in 2019 saw over 300 participants! </CardText>
          </CardBody>
        </Card>
        <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">Techathlon</CardHeader>
          <CardImg top width="100%" src={techathlon} alt="Card image cap" />
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
          <CardImg top width="100%" src={blog} alt="Card image cap" />
          <CardBody>
          <CardText>
            Learn something new, or even share something you know yourself! Starting this year, we're introducing a bimonthly blog for all club members
            to contribute on a topic of their choice. Come on, explore that creative writing side of yours! </CardText>
          </CardBody>
        </Card>

        <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
        <CardHeader tag="h3">Outreach</CardHeader>
          <CardImg top width="100%" src={outreach} alt="Card image cap" />
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
        <Jumbotron fluid>
        <Row>
             <Col xs="auto" sm="6"> 
        
          
            <h4 className="display-3">iNTUition v6.0</h4>
            <p className="lead">Our flagship hackathon, iNTUition v6.0 saw over 200 participants who all went back with sweet memories to cherish . Apart from the very informative workshpos we had on APIs, Data Science and Machine learning,
            the event produced some amazing hardware, AI and cloud hacks. The spectacular event offered some amzing prizes and merch from a wide range of sponsorers including HP, 
            Digital Ocean, Google, Zalora, 12Geeks etc. </p>
                
        
        </Col> 

        <Col xs="auto" sm="6">
        <Carousel
      activeIndex={activeIndex}
      next={next2}
      previous={previous2}
    >
      <CarouselIndicators items={hack2019} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides2}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous2} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next2} />
    </Carousel>  
        
        </Col> 

        </Row>
        </Jumbotron>

        <Jumbotron fluid>
        <Row>
             <Col xs="auto" sm="6">  
        
          
            <h4 className="display-3">IEEELearn 2019</h4>
            <p className="lead">IEEELearn 2019 was an introductory level workshop series with the main aim of equiping the participants with the skills required for the very important
            data science, machine learning and AI needed in this era. True to its aim, all participants enjoyed learning the basics of Python, and Data analysis </p>
                
        
        </Col> 

        <Col xs="auto" sm="6">
        <Carousel
      activeIndex={activeIndex}
      next={next1}
      previous={previous1}
    >
      <CarouselIndicators items={ieelrn2019} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides1}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous1} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next1} />
    </Carousel> 
        
        </Col> 

        </Row>
        </Jumbotron>
    </div>
    </div>
    );
  };

  export default Events;
