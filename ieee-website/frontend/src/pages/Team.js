import React,{Component} from 'react';
import {
  Card, CardImg,CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle,CardFooter, Button, CardLink,CardDeck,
} from 'reactstrap';
import logo from '../logo.png';


const Team = (props) => {
  return (
    // <div style={{width:'100%'}}>
    //   <table>
    //     <tr sm="6" style={{display:'flex', flexDirection:'row'}}>
    //       <td>
    //       <Card body outline color="info" inverse style={{ backgroundColor: '#333', borderColor: '#333',flex:1 }} className="text-center">
    //       <CardHeader tag="h3">Aishik Nagar</CardHeader>
    //     <CardBody>
    //       <CardTitle>iNTUition Chair</CardTitle>
    //       <CardSubtitle>Technical Director</CardSubtitle>
    //       <img src={logo} alt="Card image cap" />
    //       <br></br>
    //       <Button color="secondary">LiknedIn</Button>
    //     </CardBody>
    //     {/* <CardFooter>Footer</CardFooter> */}
    //   </Card>
    //       </td>
    //       <td>
    //       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',flex:1 }} className="text-center">
    //       <CardHeader tag="h3">Aishik Nagar</CardHeader>
    //     <CardBody>
    //       <CardTitle>iNTUition Chair</CardTitle>
    //       <CardSubtitle>Technical Director</CardSubtitle>
    //       <img src={logo} alt="Card image cap" />
    //       <br></br>
    //       <Button color="secondary">LiknedIn</Button>
    //     </CardBody>
    //     {/* <CardFooter>Footer</CardFooter> */}
    //   </Card>
    //       </td>
    //       <td>
    //       <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',flex:1 }} className="text-center">
    //       <CardHeader tag="h3">Aishik Nagar</CardHeader>
    //     <CardBody>
    //       <CardTitle>iNTUition Chair</CardTitle>
    //       <CardSubtitle>Technical Director</CardSubtitle>
    //       <img src={logo} alt="Card image cap" />
    //       <br></br>
    //       <Button color="secondary">LinkedIn</Button>
    //     </CardBody>
    //     {/* <CardFooter>Footer</CardFooter> */}
    //   </Card>
    //       </td>
    //     </tr>
    //   </table>
    // </div>
    <div>
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
  </div>
  );
};

export default Team;