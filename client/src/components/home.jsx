import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Segment } from 'semantic-ui-react';

import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';


class Home extends React.Component {
  render() {
    return (
      <div>
        Featured Project

        <Segment>

          <Grid columns={1} padded>
            <FeaturedProject />
          </Grid>

        </Segment>

        Trending Projects

        <Segment>

          <Grid columns={2} padded>

            <Grid.Column>
              <ProjectPreview />
            </Grid.Column>

            <Grid.Column>
              <ProjectPreview />
            </Grid.Column>

            <Grid.Column>
              <ProjectPreview />
            </Grid.Column>

            <Grid.Column>
              <ProjectPreview />
            </Grid.Column>

            <Grid.Column>
              <ProjectPreview />
            </Grid.Column>

            <Grid.Column>
              <ProjectPreview />
            </Grid.Column>

          </Grid>

        </Segment>
      </div>
    );
  }
}

export default Home;
