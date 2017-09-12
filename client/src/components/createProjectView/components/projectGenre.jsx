import React from 'react';
import {Header, Menu, Dropdown} from 'semantic-ui-react';

const genreOptions = [{ key: 1, text: 'Action', value: 'Action' }, { key: 2, text: 'Adventure', value: 'Adventure' }, { key: 3, text: 'Animated', value: 'Animated' }, { key: 4, text: 'Comedy', value: 'Comedy' }, { key: 5, text: 'Crime', value: 'Crime' }, { key: 6, text: 'Documentary', value: 'Documentary' }, { key: 7, text: 'Drama', value: 'Drama' }, { key: 8, text: 'Musical', value: 'Musical' }, { key: 9, text: 'Science Fiction', value: 'Science Fiction' }, { key: 10, text: 'War', value: 'War' }, { key: 11, text: 'Western', value: 'Western' }];

const ProjectGenre = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Genre</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <div style={{width: '25%'}}>
        <Menu widths={1}>
          <Dropdown compact selection
            value={props.projectGenre}
            options={genreOptions} 
            onChange={props.handleGenreSelection}
            closeOnChange={true}
            scrolling={true}
            item={true}
          />
        </Menu>
      </div>
    </div>
  </div>
);

export default ProjectGenre;
