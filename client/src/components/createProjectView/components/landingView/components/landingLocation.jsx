import React from 'react';
import {Header, Input} from 'semantic-ui-react';

const LandingLocation = (props) => (
  <div style={{paddingTop: '9%'}}>
    <Header as='h3'> Enter your location</Header>
    <Input fluid name="projectLocation"
      placeholder='e.g. San Francisco, CA'
      onChange={props.handleProjectLocationInput}
    />
  </div>
);

export default LandingLocation;
