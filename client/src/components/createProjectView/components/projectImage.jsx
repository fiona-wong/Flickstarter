import React from 'react';
import {Header, Image} from 'semantic-ui-react';
import ImageUploader from '../../imageUploader.jsx';

const ProjectImage = (props) => (
  <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
    <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
      <Header as='h4'>Project image</Header>
    </div>
    <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
      <div>
        <Image src={props.projectImage} size='medium' shape='rounded'/>
      </div>
      <ImageUploader getUploadWidget={props.getUploadWidget}/>
      <p> This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. </p>
    </div>
  </div>
);

export default ProjectImage;
