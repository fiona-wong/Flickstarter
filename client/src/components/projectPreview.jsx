import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import moment from 'moment';
import ProjectCard from './projectCard.jsx';

import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
    this.daysRemaining = this.daysRemaining.bind(this);
  }

  daysRemaining(project) {
    let formattedDate = project.goal_deadline.slice(6) + project.goal_deadline.slice(0, 2) + project.goal_deadline.slice(3, 5);
    let eventDate = moment(formattedDate);
    let todaysDate = moment();
    return eventDate.diff(todaysDate, 'days');
  }

  render() {
    return (
      <div>
        <Grid columns={2} padded>

          {this.props.projects.map((project, index) =>

=======
            <Grid.Column raised key={index}>
              <ProjectCard
                project={project}
                daysRemaining={this.daysRemaining}
              />
            </Grid.Column>
          )}
        </Grid>
      </div>
    );
  }
}

export default ProjectPreview;
