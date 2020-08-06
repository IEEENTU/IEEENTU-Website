// import React from 'react';
// // import { Switch, Route } from 'react-router-dom';


// const Contact = () => {
//   return (
//     <h2>Contact</h2>
//   );
// }

// export default Contact;
import React,{ useState }  from 'react';
import { ListGroup, ListGroupItem,Jumbotron,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import { Collapse, CardBody, Card } from 'reactstrap';
import { UncontrolledCollapse , CardBody, Card } from 'reactstrap';

const Contact = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <h1 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>Contact Us</h1>
      <Jumbotron>
    {/* <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup> */}
      <h1>Create a Post </h1>
<form action="/api/form" method="GET">
    Title: <input type="text" name="title"/><br/>
    Content: <br/>
    <textarea cols="35" rows="8" name="content">
        </textarea><br/>
    <input type="submit" value="Post"/>
</form>
      {/* <Button>Submit</Button> */}
    </Jumbotron>
    <br />
    <h1 style={{textAlign:'center',fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}}>FAQ</h1>
    <Jumbotron>
    {/* <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Toggle
    </Button> */}
    <ListGroup>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="info" tag="button" id="toggler">What is IEEE?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody style={{fontFamily: 'Muli'}}>
        IEEE - The Institute of Electrical and Electronics Engineers - is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 419,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted “voice” for engineering, computing, and technology information around the globe. IEEE also has technical Societies that provide benefits to members within specialized fields of interest ranging from Aerospace to Nuclear Engineering and many more. More details about IEEE can be found here.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="success" tag="button" id="toggler2">What is IEEE NTU Student Branch?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler2">
        <Card>
          <CardBody style={{fontFamily: 'Muli'}}>
          We are the NTU Student Chapter of IEEE Singapore. IEEE NTU Student Branch is one of the oldest clubs in NTU with our constitution dating back to 1990. We provide opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. We offer programs, activities and professional networking opportunities that build critical skills outside of the classroom and contribute to a student’s educational, technical and professional development. We organize activities in all branches of engineering, especially electrical and electronic engineering, and computer science ranging from hackathons to coding bootcamps. More info about our past events can be found here.
            </CardBody>
            </Card>
            </UncontrolledCollapse>
      <ListGroupItem style={{fontFamily: 'Futura,Trebuchet MS,Arial,sans-serif'}} color="warning" tag="button" id="toggler3">Why should I join IEEE NTU Student Branch?</ListGroupItem>
      <UncontrolledCollapse toggler="#toggler3">
        <Card>
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
        <Card>
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
        <Card>
          <CardBody style={{fontFamily: 'Muli'}}>
            <p>As long as you are a NTU student and are passionate about our mission and vision, you are welcome to join us!</p>
            </CardBody>
            </Card>
            </UncontrolledCollapse>
    </ListGroup>
    </Jumbotron>
    </div>

  );
}

export default Contact;