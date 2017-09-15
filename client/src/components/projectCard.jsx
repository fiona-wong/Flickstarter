import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import SupportModal from './supportModal.jsx';
import EditProject from './editProject.jsx';
import { Card, Grid, Icon, Image, Segment, Popup, Label, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { getDaysRemaining } from '../helpers.js';

const ProjectCard = (props) => (
  <Card fluid raised>
    <div>
      <Popup 
        trigger={
          <Button circular 
            icon='thumbs outline up' 
            id='upvote-button'
          />
        }
        content='Upvote project'
        position='left center'
      />
      <Image fluid src={props.project.photo_url}/>
    </div>

    <Card.Content >
      <div className='card-genre-upvotes'>
        <div>
          {props.project.genre}
        </div>
        <div>
          <Icon name='thumbs up' /> {props.project.upvote_count}
        </div>
      </div>
      <Card.Header>
        {props.profilePage ?
          <div id='project-card-content-container'>
            <Link to={`/project/${props.id}`}>
              {props.project.name}
            </Link>
            <Popup
              trigger={
                <div className='card-title'>
                  <Link to={`/editproject/${props.id}`}>
                    <Icon name='edit' circular inverted color='teal'/>
                  </Link>
                </div>
              }
              content='Edit your project'
              position='left center'
            />
          </div> : 
          <Link to={`/project/${props.project.id}`}>
            {props.project.name}
          </Link>
        }
      </Card.Header>

      <Card.Meta>
        <div style={{display: 'flex', justifyContent: 'left', color: 'black'}}>
        By <Image src={props.project.profile.photo} size="tiny" avatar /><span>{props.project.profile.display}</span>
        </div>
      </Card.Meta>

      <Card.Description>
        {props.project.short_description}
      </Card.Description>

    </Card.Content>

    <Card.Content extra>

      <ProjectStatus
        name={props.project.name}
        contributed={props.project.raised_amount}
        funded={Math.round(100 * (props.project.raised_amount / props.project.goal_amount)).toString()}
        daysRemaining={getDaysRemaining(props.project)}
      />
      
      <SupportModal />

    </Card.Content>

  </Card>
);

export default ProjectCard;
