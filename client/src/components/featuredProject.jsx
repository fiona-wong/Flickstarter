import React from 'react';
import ReactDOM from 'react-dom';
import {Image, Segment, Icon, Header, Label} from 'semantic-ui-react';
import FeaturedProjectStatus from './featuredProjectStatus.jsx';
import SupportModal from './supportModal.jsx';

class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment raised id='featured-project-segment'>
        <Label
          color='teal'
          ribbon size='large'
          id='featured-project-label'
        >Featured</Label>
        <div className='basic-flex-centered-row'>
          <div className='basic-flex-column featured-project-container'>
            <div id='featured-project-image-container'>
              <Image fluid
                shape='rounded'
                src='http://freewallpapersstock.com/download/171750/640x480/80235_terminator_arnold_schwarzenegger_gun_3546_2560x1600-640x480-c.jpg'
              />
            </div>
          </div>
          <div className='basic-flex-column featured-project-container'>
            <div id='featured-project-content-container'>
              <Header as='h2'>Terminator 9: A Love Story
                <Header.Subheader>
                  By Abhi Bala
                </Header.Subheader>
              </Header>
              <p>After the termination of the Terminator franchise, most people thought they would never again experience the thrill that is Terminator. Worry not - we are bringing it back! Terminator 9 is a classic love story: Cyborg meets lady, romance ensues. We know the world wants - nay - NEEDS this film, and we are fully prepared to create it.</p>
              <div id='featured-project-extras-container'>
                <div className='basic-flex-row'>
                  <div style={{paddingRight: '20px'}}>
                    <Icon name="marker" />
                    Los Angeles, CA
                  </div>
                  <div>
                    <Icon name="tag" />
                    Romance
                  </div>
                </div>
              </div>
              <FeaturedProjectStatus />
            </div>
            <div id='featured-project-contribute-button-container'>
            </div>
          </div>
        </div>
      </Segment>
    );
  }
}

export default FeaturedProject;
