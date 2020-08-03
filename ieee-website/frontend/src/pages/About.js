import React from 'react';
// import { Switch, Route } from 'react-router-dom';

const AboutLayout = () => {
  return (
    <h2>About</h2>
  );
}

export default AboutLayout;

// import { createMedia } from '@artsy/fresnel'
// import React, { Component } from 'react'
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Sidebar,
//   Visibility,
//   ResponsiveContainer
// } from 'semantic-ui-react'

// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// })

// const AboutLayout = () => (
//   <ResponsiveContainer>
//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Grid container stackable verticalAlign='middle'>
//         <Grid.Row>
//           <Grid.Column width={8}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               Who We Are and What We Do
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//              ***
//              Add text
//              ***
//             </p>

//           </Grid.Column>
//           <Grid.Column floated='right' width={6}>
//             <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>

//     <Segment style={{ padding: '0em' }} vertical>
//       <Grid celled='internally' columns='equal' stackable>
//         <Grid.Row textAlign='center'>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               Our Mission
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//                 IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity.
//                 </p>
//           </Grid.Column>
//           <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//             <Header as='h3' style={{ fontSize: '2em' }}>
//               Our Vision
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//             IEEE will be essential to the global technical community and to technical professionals everywhere, 
//             and be universally recognized for the contributions of technology and of technical professionals in 
//             improving global conditions.
//             </p>
//           </Grid.Column>
//         </Grid.Row>
//       </Grid>
//     </Segment>

//     <Segment style={{ padding: '8em 0em' }} vertical>
//       <Container text>
//         <Header as='h3' style={{ fontSize: '2em' }}>
//           Organizational Aims and Objectives
//         </Header>
//         <p style={{ fontSize: '1.33em' }}>
//           ***Add Text***
//         </p>

//       </Container>
//     </Segment>
//   </ResponsiveContainer>
// )

// export default AboutLayout;