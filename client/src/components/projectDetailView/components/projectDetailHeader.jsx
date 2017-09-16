import React from 'react';
import {Image} from 'semantic-ui-react';

const ProjectDetailHeader = (props) => {
  return (
    <div className='basic-flex-row' style={{marginBottom: '1.4rem'}}>
      <div className='project-detail-creator-container'>
        <Image shape="circular" size='tiny' src='http://www.iconsdb.com/icons/preview/red/square-xxl.png'/>
        <div className='project-detail-name-container'> 
          <div className='basic-flex-column' style={{paddingRight: '4px'}}>
            By
          </div>
          <div className='basic-flex-column'>
            <p style={{fontWeight: 'bold'}}>Creator Name</p>
          </div>
        </div>
      </div>
      <div className='basic-flex-column' style={{width: '85%'}}>
        <div className='basic-flex-column'>
          <div className='project-detail-header'>
            {props.project.name}
          </div>
          <div className='project-detail-subheader'>
            {props.project.short_description}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProjectDetailHeader;
