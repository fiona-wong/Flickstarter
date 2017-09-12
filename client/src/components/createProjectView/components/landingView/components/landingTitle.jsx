import React from 'react';
import {Header, Input} from 'semantic-ui-react';

const LandingTitle = (props) => (
  <div className='landing-item-padding'>
    <Header as='h3'> Give your project a title</Header>
    <Input name="projectTitle" fluid
      onChange={props.handleProjectTitleInput}
    />
  </div>
);

export default LandingTitle;
