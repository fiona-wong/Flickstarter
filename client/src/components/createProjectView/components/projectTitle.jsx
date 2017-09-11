import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectTitle = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Project title</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
      <Input name="projectTitle" style={{width: '50%'}}
        value={props.projectTitle}
        onChange={props.handleProjectTitleInput}
      />
      <p> Giving your project a clear, descriptive name will help people find it. </p>
    </div>
  </div>
);

export default ProjectTitle;