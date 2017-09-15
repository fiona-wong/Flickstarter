import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import EditProject from './editProject.jsx';
import { Container, Card, Grid, Icon, Image, Segment, Popup, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { getDaysRemaining } from '../helpers.js';
import Profile from './profile.jsx';


const ProjectCard = (props) => (
  <Card fluid raised>

    <Image src={props.project.photo_url}/>

    <Card.Content >

      <Card.Header>
        {props.profilePage ?
          <div id='project-card-content-container'>
            {props.project.name}
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
          {props.profilePage ?
            <div>
              <Image src={props.photo} size="tiny" avatar /><span>By {props.creatorName}</span>
            </div> :
            <div>
              <Link to={`/profile/${props.project.profile.id}`}>
                <Image src={props.project.profile.photo} size="tiny" avatar /><span>By {props.project.profile.display}</span>
              </Link>
            </div>}
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

      <a className="coinbase-button" data-code="2b30a03995ec62f15bdc54e8428caa87" href="https://www.coinbase.com/checkouts/2b30a03995ec62f15bdc54e8428caa87">Donate Bitcoin!</a>

    </Card.Content>

  </Card>
);

export default ProjectCard;
