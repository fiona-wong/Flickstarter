import React from 'react';
import {Image, Segment, Icon, Header} from 'semantic-ui-react';

import FeaturedProjectStatus from './featuredProjectStatus.jsx';


class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment raised id='featured-project-segment'>
        <div className='basic-flex-row'>
          <div id='featured-project-image-container'>
            <Image shape='rounded' src='http://res.cloudinary.com/dyrrwpemp/image/upload/v1504929225/pxmzjibkdn56bcgfmdt9.jpg' size='medium' />
            <div id='featured-project-location-container'>
              <Header as='h4'>
              <Icon name="marker" size='mini'/>
                <Header.Content>
                  Los Angeles, CA
                </Header.Content>
              </Header>
            </div>
          </div>
          <div id='featured-project-content-container'>
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
