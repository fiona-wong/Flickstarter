import React from 'react';

import $ from 'jquery';
import { Grid, Segment, Header, Dropdown, Label } from 'semantic-ui-react';
import SearchInput, { createFilter } from 'react-search-input';
import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';
import Footer from './footer.jsx';
import Welcome from './welcome.jsx';
import OverallStats from './overallStats.jsx';

const KEYS_TO_FILTERS = ['name'];
const colors = ['yellow', 'red', 'blue', 'green', 'black', 'pink', 'grey', 'purple', 'teal', 'orange', 'brown'];


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchTerm: '',
      filterTerm: null,
      userUpvotes: [],
      totalDollars: '',
      totalBackers: '',
      totalProjects: ''
    };
  }

  // getTotalDollars(data) {
  //   return data.reduce((totalSum, projectSum) =>

  //   );
  // }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/projects',
      success: (projectData) => {
        console.log(projectData.projects);
        this.setState({
          projects: projectData.projects,
          userUpvotes: projectData.userUpvotes,
          // totalDollars: projectData.,
          // totalBackers: ,
          // totalProjects:
        });
      },
      error: function () {
        console.log('error fetching projects!');
      }
    });
  }

  getSelected(e, {value}) {
    this.setState({filterTerm: value});
  }

  render() {
    const tagOptions = this.state.projects.concat({genre: null}).map(project => {
      return {
        key: Math.random() * 99999,
        text: project.genre,
        value: project.genre,
        label: { color: colors[Math.floor(Math.random() * colors.length)], empty: true, circular: true }
      };
    });

    let filteredMovies = this.state.projects.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    filteredMovies = this.state.filterTerm ? this.state.projects.filter(project => project.genre === this.state.filterTerm) : filteredMovies;

    return (
      <div>
      <div><Welcome /> </div>
      <div id='home-body-container'>
        <OverallStats />
        <Segment style={{paddingTop: '-2%'}}>
          <Grid columns={1} padded>
            <FeaturedProject />
          </Grid>
        </Segment>
        <Segment>
          <div id='trending-projects-header-container'>
            <div className='basic-flex-centered-column'>
              <h3> Trending Projects </h3>
            </div>
            <div>
              <Dropdown
                onChange={this.getSelected.bind(this)}
                options={tagOptions}
                selection
                text='Filter Posts' icon='filter' floating labeled button className='icon'
              />
            </div>
          </div>
          <ProjectPreview projects={filteredMovies} userUpvotes={this.state.userUpvotes} />
        </Segment>
        <Footer />
      </div>
    </div>
    );
  }
}

export default Home;
