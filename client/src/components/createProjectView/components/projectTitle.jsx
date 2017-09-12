import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectTitle = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Project title</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectTitle" style={{width: '50%'}}
        value={props.projectTitle}
        onChange={props.handleProjectTitleInput}
      />
      <p> Giving your project a clear, descriptive name will help people find it. </p>
    </div>
  </div>
);

export default ProjectTitle;