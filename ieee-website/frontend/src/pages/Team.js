import React,{Component} from 'react';
import {
  Card, CardImg,CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle,CardFooter, Button, CardLink,CardDeck,
} from 'reactstrap';
import logo from '../logo.png';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';


const CustomStyle ={
  fontFamily: 'Muli',
  textAlign:'center'
  // color:'black'
}
const Team = (props) => {
  return (
    <div>
      <Fade>
          <h1 style={CustomStyle}>Meet Our Team!</h1>
        </Fade>
      <Fade>
    <CardDeck>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
      <CardHeader tag="h3">Aishik Nagar</CardHeader>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>iNTUition Chair</CardTitle>
          <CardSubtitle>Technical Director</CardSubtitle>
          <Button color="info">LinkedIn</Button>
        </CardBody>
      </Card>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
      <CardHeader tag="h3">Aishik Nagar</CardHeader>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>iNTUition Chair</CardTitle>
          <CardSubtitle>Technical Director</CardSubtitle>
          <Button>LinkedIn</Button>
        </CardBody>
      </Card>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
      <CardHeader tag="h3">Aishik Nagar</CardHeader>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>iNTUition Chair</CardTitle>
          <CardSubtitle>Technical Director</CardSubtitle>
          <Button>LinkedIn</Button>
        </CardBody>
      </Card>
    </CardDeck>
    <br></br>
    <CardDeck>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
      <CardHeader tag="h3">Aishik Nagar</CardHeader>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>iNTUition Chair</CardTitle>
          <CardSubtitle>Technical Director</CardSubtitle>
          <Button>LinkedIn</Button>
        </CardBody>
      </Card>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
      <CardHeader tag="h3">Aishik Nagar</CardHeader>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>iNTUition Chair</CardTitle>
          <CardSubtitle>Technical Director</CardSubtitle>
          <Button>LinkedIn</Button>
        </CardBody>
      </Card>
      <Card body outline color="info" inverse style={{ backgroundColor: '#333' }} className="text-center">
      <CardHeader tag="h3">Aishik Nagar</CardHeader>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>iNTUition Chair</CardTitle>
          <CardSubtitle>Technical Director</CardSubtitle>
          <Button>LinkedIn</Button>
        </CardBody>
      </Card>
    </CardDeck>
    <br></br>
    </Fade>
  </div>
  );
};

export default Team;