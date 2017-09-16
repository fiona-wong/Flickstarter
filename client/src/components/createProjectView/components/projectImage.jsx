import React from 'react';
import {Header, Image} from 'semantic-ui-react';
import ImageUploader from '../../imageUploader.jsx';

const ProjectImage = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Project image</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <div>
        <Image src={props.projectImage} size='medium' shape='rounded'/>
      </div>
      <ImageUploader getUploadWidget={props.getUploadWidget}/>
      <p> This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. Images must have dimensions of 8 x 6. Ideal image size is 640 x 480 pixels. </p>
    </div>
  </div>
);

export default ProjectImage;
