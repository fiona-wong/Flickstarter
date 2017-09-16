import React from 'react';
import ReactDOM from 'react-dom';
import ProjectStatus from './projectStatus.jsx';
import moment from 'moment';
import ProjectCard from './projectCard.jsx';
import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid columns={2} padded>

          {this.props.projects.map((project, index) =>
            <Grid.Column key={index}>
              <ProjectCard
                project={project}
              />
            </Grid.Column>
          )}
        </Grid>
      </div>
    );
  }
}

export default ProjectPreview;
