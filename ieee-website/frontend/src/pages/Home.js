import React,{Component} from 'react';
import Youtube from 'react-youtube'
import '../../css/BackgroundVideo.module.css';
// import { Switch, Route } from 'react-router-dom';

const CustomStyle ={
  fontFamily: 'Muli',
  color:'black'
}

// const videoSource = "https://player.vimeo.com/external/395684895.sd.mp4?s=c5f81ac05cb1506db35c7811b1bbd9c9049dc1a2&profile_id=139&oauth2_token_id=57447761"
const videoSource = "https://player.vimeo.com/external/368740653.sd.mp4?s=c3a4845b79ec98789e651d7c5cf4c77bd3aad608&profile_id=139&oauth2_token_id=57447761"
// const videoSource = "https://player.vimeo.com/external/368460590.sd.mp4?s=acc6272ec264a62a8947cd8060d81d85a5bbfe01&profile_id=139&oauth2_token_id=57447761"
// const videoSource = "https://player.vimeo.com/external/370467553.sd.mp4?s=96de8b923370fb7fa8616d4e0b74eaf3fac9e576&profile_id=139&oauth2_token_id=57447761"
// const videoSource = "https://player.vimeo.com/external/368757701.sd.mp4?s=4afd5620c9338f836bdb9bc126ac0e6525ead07c&profile_id=139&oauth2_token_id=57447761"
// const opts = {
//   height: '100%',
//   width: '100%',
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 1,
//   },
// };

// class VideoBackground extends Component{
//   constructor (props) {
//     super(props);

//     this.state = {
//         videoURL: 'https://www.youtube.com/watch?v=rEagPJY9hwY'
//     }
// }
// render () {
//   return (
//       <video id="background-video" loop autoPlay>
//           <source src={this.state.videoURL} type="video/mp4" />
//           <source src={this.state.videoURL} type="video/ogg" />
//           Your browser does not support the video tag.
//       </video>
//   )
// }
// };

const Home = () => {
  
  return (
    <section class="showcase">
      <div class="video-container">
      <video autoPlay="autoplay" controls loop muted >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div class="content">
        <h1>Welcome to IEEE</h1>
        <h3>NTU Student branch</h3>
        <a href="/about" class="btn">About Us</a>
      </div>
    </section>
  );
}

export default Home;