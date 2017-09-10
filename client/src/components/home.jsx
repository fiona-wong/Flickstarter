import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Grid, Segment, Header } from 'semantic-ui-react';
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
      <div style={{width: '94%', margin: '2% 0% 0% 3%', paddingTop: '55px'}}>

        <SearchBar />

        <Segment>
          <Header style={{marginLeft: '2%', marginBottom: '-1%'}}> Featured Project </Header>
          <Grid columns={1} padded>
            <FeaturedProject />
          </Grid>
        </Segment>
        <Segment>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '2%', marginRight: '2%'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <h3 > Trending Projects </h3>
            </div>
            <div>
              <Filter />
            </div>
          </div>
          <ProjectPreview projects={this.state.projects} />
        </Segment>
      </div>
    );
  }
}

export default Home;
