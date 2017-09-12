import React from 'react';
import {Header, Input} from 'semantic-ui-react';

const LandingLocation = (props) => (
  <div className='landing-item-padding'>
    <Header as='h3'> Enter your location</Header>
    <Input fluid name="projectLocation"
      placeholder='e.g. San Francisco, CA'
      onChange={props.handleProjectLocationInput}
    />
  </div>
);

export default LandingLocation;
