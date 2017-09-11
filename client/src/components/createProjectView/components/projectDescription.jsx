import React from 'react';
import {TextArea, Header, Form} from 'semantic-ui-react';

const ProjectDescription = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Full description</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
      <Form>
        <TextArea autoHeight 
          placeholder='Add your description here...' 
          name='projectDescription'
          onChange={props.handleDescriptionInput}
        />
      </Form>
      <p> Share your detailed plans with the world. It's up to you to make the case for your project. </p>
    </div>
  </div>
);

export default ProjectDescription;
