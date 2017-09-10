import React from 'react';
import ReactDOM from 'react-dom';
import {Image, Segment, Icon, Header} from 'semantic-ui-react';
import FeaturedProjectStatus from './featuredProjectStatus.jsx';
class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <Segment raised style={{height: '96%', width: '96%', margin: '2%'}} >
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div style={{width: '30%', margin: '2%'}}>
                <Image shape='rounded' src='http://res.cloudinary.com/dyrrwpemp/image/upload/v1504929225/pxmzjibkdn56bcgfmdt9.jpg' size='medium' />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingTop: '1%'}}>
                  <Header as='h4'>
                  <Icon name="map pin" size='small'/>
                    <Header.Content>
                      Los Angeles, CA
                    </Header.Content>
                  </Header>
                </div>
              </div>
              <div style={{width: '70%', margin: '2% 2% 2% 0%'}}>
                <Header as='h2'>Terminator 9: A Love Story
                  <Header.Subheader>
                    Arnold's back... again
                  </Header.Subheader>
                </Header>
                <p>After the termination of the Terminator franchise, most people thought they would never again experience the thrill that is Terminator. Worry not - we are bringing it back! Terminator 9 is a classic love story: Cyborg meets lady, romance ensues. We know the world wants - nay - NEEDS this film, and we are fully prepared to create it.</p>
              </div>
            </div>
            <FeaturedProjectStatus />
          </Segment>
    );
  }
}
export default FeaturedProject;