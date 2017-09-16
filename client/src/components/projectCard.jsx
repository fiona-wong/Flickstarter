import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import EditProject from './editProject.jsx';
import { Button, Container, Card, Grid, Icon, Image, Segment, Popup, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { getDaysRemaining } from '../helpers.js';
import Profile from './profile.jsx';


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
        {props.pathName === '/profile' ?
          <div id='project-card-content-container'>
            <Link to={`/projects/${props.id}`}>
              <p>{props.project.name}</p>
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
          <div id='project-card-content-container'>
            <Link to={`/projects/${props.project.id}`}>
              <p>{props.project.name}</p>
            </Link>
          </div>
        }
      </Card.Header>

      <Card.Description style={{margin: '0'}}>
        {props.project.short_description}
      </Card.Description>

      <Card.Meta>
        <div className='project-card-name-container'>
          {props.profilePage ?
            <div>
              <div className='basic-flex-row'>
                <Image src={props.photo} size="tiny" avatar />
                By <p>{props.creatorName}</p>
              </div>
            </div> :
            <div className='basic-flex-row'>
              <Image src={props.project.profile.photo} size="tiny" avatar />
              <div className='basic-flex-column' style={{margin: '0'}}>
                By
              </div>
              <div className='basic-flex-column'>
                <Link to={`/profile/${props.project.profile.id}`}>
                  <p>{props.project.profile.display}</p>
                </Link>
              </div>
            </div>
          }
        </div>
      </Card.Meta>

    </Card.Content>

    <Card.Content extra style={{paddingTop: '.5em'}}>

      <ProjectStatus
        name={props.project.name}
        contributed={props.project.raised_amount}
        funded={Math.round(100 * (props.project.raised_amount / props.project.goal_amount)).toString()}
        daysRemaining={getDaysRemaining(props.project)}
      />

    </Card.Content>

  </Card>
);

export default ProjectCard;
