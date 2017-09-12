import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import moment from 'moment';
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';

const ProjectCard = (props) => (
  <Card fluid>
    <Image src={props.project.photo_url} />

    <Card.Content >

      <Card.Header>
        {props.project.name}
      </Card.Header>

      <Card.Meta>
        {props.project.short_description}
      </Card.Meta>

      <Card.Description>
        {props.project.long_description}
      </Card.Description>

    </Card.Content>

    <Card.Content extra>

      <ProjectStatus name={props.project.name} contributed={props.project.raised_amount} funded={(100 * (props.project.raised_amount / props.project.goal_amount)).toString().slice(0, 2)} daysRemaining={props.daysRemaining(props.project)}/>

      <a className="coinbase-button" data-code="2b30a03995ec62f15bdc54e8428caa87" href="https://www.coinbase.com/checkouts/2b30a03995ec62f15bdc54e8428caa87">Donate Bitcoin!</a>

    </Card.Content>

  </Card>
);

export default ProjectCard;
