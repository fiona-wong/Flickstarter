import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectDuration = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Funding duration</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
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
