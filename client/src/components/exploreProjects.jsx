import React from 'react';
import $ from 'jquery';
import { Grid, Segment, Header, Dropdown } from 'semantic-ui-react';

import ProjectPreview from './projectPreview.jsx';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['name'];

const colors = ['yellow', 'red', 'blue', 'green', 'black', 'pink', 'grey', 'purple', 'teal', 'orange', 'brown'];


class ExploreProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      searchTerm: '',
      filterTerm: null
    };
  }

  componentWillMount() {
    $.ajax({
      method: 'GET',
      url: '/projects',
      success: (projectData) => {
        this.setState({
          projects: projectData
        });
      },
      error: function () {
        console.log('error fetching projects!');
      }
    });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term});
  }

  getSelected(e, {value}) {
    this.setState({filterTerm: value});
  }

  render() {
    const tagOptions = this.state.projects.concat({genre: null}).map(project => {
      return {
        text: project.genre,
        value: project.genre,
        label: { color: colors[Math.floor(Math.random() * colors.length)], empty: true, circular: true }
      };
    });

    let filteredMovies = this.state.projects.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    filteredMovies = this.state.filterTerm ? this.state.projects.filter(project => project.genre === this.state.filterTerm) : filteredMovies;


    return (
      <div style={{ width: '94%', margin: '2% 0% 0% 3%', paddingTop: '55px' }}>

        Search projects:
        <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />

        <Segment>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '2%', marginRight: '2%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3> Explore Projects </h3>
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
          <ProjectPreview projects={filteredMovies} />
        </Segment>
      </div>
    );
  }
}


export default ExploreProjects;
