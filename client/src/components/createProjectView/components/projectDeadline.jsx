import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectDeadline = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Funding deadline</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectDuration"
        style={{width: '120px'}}
        value={props.projectDeadline}
        disabled
      />
      <p> The end date for your fundraising campaign is not editable after launch. </p>
    </div>
  </div>
);

export default ProjectDeadline;
