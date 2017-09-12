import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectDuration = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Funding duration</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectDuration"
        style={{width: '70px'}}
        placeholder='e.g. 30' 
        onChange={props.handleProjectDurationInput}
        label={{ basic: true, content: 'days' }}
        labelPosition='right'
      />
      <p> How many days will your crowdfunding last? Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch. </p>
    </div>
  </div>
);

export default ProjectDuration;
