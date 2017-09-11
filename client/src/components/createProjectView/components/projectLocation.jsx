import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectLocation = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Project location</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
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