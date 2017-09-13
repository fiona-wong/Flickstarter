import React from 'react';
import {TextArea, Header, Form} from 'semantic-ui-react';

const ProjectDescription = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Full description</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Form>
        <TextArea autoHeight 
          placeholder='Add your description here...' 
          name='projectDescription'
          onChange={props.handleDescriptionInput}
          value={props.projectDescription}
        />
      </Form>
      <p> Share your detailed plans with the world. It's up to you to make the case for your project. </p>
    </div>
  </div>
);

export default ProjectDescription;
