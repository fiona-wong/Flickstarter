import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectBlurb = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Short blurb</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectBlurb" fluid
        onChange={props.handleBlurbInput}
        placeholder='Add your blurb here...'
      />
      <p> Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making. </p>
    </div>
  </div>
);

export default ProjectBlurb;
