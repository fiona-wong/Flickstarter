import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Segment } from 'semantic-ui-react';

import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';
import Filter from './filter.jsx';


class Home extends React.Component {
  render() {
    return (
      <div style={{width: '94%', marginLeft: '3%', paddingtop: '55px'}}>
        Featured Project

        <Segment>

          <Grid columns={1} padded>
            <FeaturedProject />
          </Grid>

        </Segment>

        Trending Projects

        <Filter />

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
