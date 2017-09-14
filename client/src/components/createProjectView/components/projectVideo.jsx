import React from 'react';
import {Input, Header} from 'semantic-ui-react';

const ProjectVideo = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Project video</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Input name="projectVideo" style={{width: '50%'}}
        value={props.projectVideo}
        placeholder='Add video url here...'
        onChange={props.handleProjectVideoInput}
      />
      <p> Give potential contributors a sneak peek of what they can expect from your project. YouTube and Vimeo videos are currently supported.</p>
    </div>
  </div>
);

export default ProjectVideo;