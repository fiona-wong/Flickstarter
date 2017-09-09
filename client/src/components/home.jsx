import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { Grid, Segment } from 'semantic-ui-react';

import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';
import Filter from './filter.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: '/api/projects',
      success: (projectData) => {
        console.log('ajax DATA', projectData);
        this.setState({
          projects: projectData
        });
      },
      error: function() {
        console.log('error fetching projects!');
      }
    });
  }

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

          <ProjectPreview projects={this.state.projects} />

        </Segment>
      </div>
    );
  }
}

export default Home;
