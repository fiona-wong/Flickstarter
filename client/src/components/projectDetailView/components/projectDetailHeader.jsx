import React from 'react';
import {Image} from 'semantic-ui-react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const ProjectDetailHeader = (props) => {
  return (
    <div className='basic-flex-row' style={{marginBottom: '1.4rem'}}>
      <div className='project-detail-creator-container'>
        {props.project.profile ? 
          <Link to={`/profile/${props.project.profile.id}`}>
            <Image shape="circular" size='tiny' src={props.project.profile.photo}/> 
          </Link> : null
        }
        <div className='project-detail-name-container'> 
          <div className='basic-flex-column' style={{paddingRight: '4px'}}>
            By
          </div>
          <div className='basic-flex-column'>
          {props.project.profile ? 
            <Link to={`/profile/${props.project.profile.id}`}>
              <p>{props.project.profile.display}</p>
            </Link> : null
          }
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
  );
};

export default ProjectDetailHeader;
