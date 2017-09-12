import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectLocation = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Project location</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectLocation"
        style={{width: '50%'}}
        value={props.projectLocation}
        onChange={props.handleProjectLocationInput}
      />
      <p> Where will your project be created? </p>
    </div>
  </div>
);

export default ProjectLocation;