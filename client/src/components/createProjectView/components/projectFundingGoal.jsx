import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectFundingGoal = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Funding goal</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectFundingGoal"
        style={{width: '100px'}}
        placeholder='e.g. 10,000' 
        onChange={props.handleFundingGoalInput}
        label={{ basic: true, content: '$' }}
        labelPosition='left'
      />
      <p> Funding on Flickstarter is all-or-nothing. If your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project. </p>
    </div>
  </div>
);

export default ProjectFundingGoal;
