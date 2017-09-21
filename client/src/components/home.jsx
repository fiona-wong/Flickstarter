import React from 'react';

import $ from 'jquery';
import { Grid, Segment, Header, Dropdown, Label } from 'semantic-ui-react';
import SearchInput, { createFilter } from 'react-search-input';
import FeaturedProject from './featuredProject.jsx';
import ProjectPreview from './projectPreview.jsx';
import Footer from './footer.jsx';
import Welcome from './welcome.jsx';
import OverallStats from './overallStats.jsx';

const KEYS_TO_FILTERS = ['name', 'short_description', 'long_description', 'location'];
const colors = ['yellow', 'red', 'blue', 'green', 'black', 'pink', 'grey', 'purple', 'teal', 'orange', 'brown'];


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchTerm: '',
      filterTerm: null,
      userUpvotes: [],
      // totalDollars: '',
      // totalBackers: '',
      // totalProjects: ''
    };

    // this.getTotalDollars = this.getTotalDollars.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/projects',
      success: (projectData) => {
        console.log(projectData.projects);
        this.setState({
          projects: projectData.projects,
          userUpvotes: projectData.userUpvotes,
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
const itemOpts = [
  { key: 1,
    text: 'Action',
    value: 'Action',
    label: { color: 'red', empty: true, circular: true },
  },
  { key: 2,
    text: 'Adventure',
    value: 'Adventure',
    label: { color: 'blue', empty: true, circular: true },
  },
  { key: 3,
    text: 'Animated',
    value: 'Animated',
    label: { color: 'yellow', empty: true, circular: true },
  },
  { key: 4,
    text: 'Comedy',
    value: 'Comedy',
    label: { color: 'green', empty: true, circular: true },
  },
  { key: 5,
    text: 'Crime',
    value: 'Crime',
    label: { color: 'black', empty: true, circular: true },
  },
  { key: 6,
    text: 'Documentary',
    value: 'Documentary',
    label: { color: 'pink', empty: true, circular: true },
  },
  { key: 7,
    text: 'Drama',
    value: 'Drama',
    label: { color: 'grey', empty: true, circular: true },
  },
  { key: 8,
    text: 'Musical',
    value: 'Musical',
    label: { color: 'purple', empty: true, circular: true },
  },
  { key: 9,
    text: 'Science Fiction',
    value: 'Science Fiction',
    label: { color: 'teal', empty: true, circular: true },
  },
  { key: 10,
    text: 'War',
    value: 'War',
    label: { color: 'orange', empty: true, circular: true },
  },
  { key: 11,
    text: 'Western',
    value: 'Western',
    label: { color: 'brown', empty: true, circular: true },
  }
];

    let filteredMovies = this.state.projects.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    filteredMovies = this.state.filterTerm ? this.state.projects.filter(project => project.genre === this.state.filterTerm) : filteredMovies;

    return (
      <div>
      <div><Welcome /></div>
      <OverallStats />
      <div id='home-body-container'>
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
                options={itemOpts}
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
