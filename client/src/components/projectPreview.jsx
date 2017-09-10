import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import moment from 'moment';

import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
    this.daysRemaining = this.daysRemaining.bind(this);
  };

  daysRemaining(project) {
    let eventDate = moment(project.goal_deadline);
    let todaysDate = moment();
    return eventDate.diff(todaysDate, 'days');
  }

  render() {
    return (
      <div>
        <Grid columns={2} padded>
          {this.props.projects.map((project, index) =>

          <Grid.Column>

            <Card key={index} fluid>

              <Image src={project.photo_url} />

              <Card.Content >

                <Card.Header>
                  {project.name}
                </Card.Header>

                <Card.Meta>
                  {project.short_description}
                </Card.Meta>

                <Card.Description>
                 {project.long_description}
                </Card.Description>

              </Card.Content>

              <Card.Content extra>
                
                <ProjectStatus name={project.name} contributed={project.raised_amount} funded={(100 * (project.raised_amount / project.goal_amount)).toString().slice(0,2)} daysRemaining={this.daysRemaining(project)}/>

              </Card.Content>

            </Card>
          </Grid.Column>
        )}
        </Grid>
      </div>
    )
  }
};

export default ProjectPreview;
