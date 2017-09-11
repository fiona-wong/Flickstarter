import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectFundingGoal = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Funding goal</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
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
