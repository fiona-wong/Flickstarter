import React from 'react';
import {Header, Menu, Dropdown} from 'semantic-ui-react';

const genreOptions = [{ key: 1, text: 'Action', value: 'Action' }, { key: 2, text: 'Adventure', value: 'Adventure' }, { key: 3, text: 'Animated', value: 'Animated' }, { key: 4, text: 'Comedy', value: 'Comedy' }, { key: 5, text: 'Crime', value: 'Crime' }, { key: 6, text: 'Documentary', value: 'Documentary' }, { key: 7, text: 'Drama', value: 'Drama' }, { key: 8, text: 'Musical', value: 'Musical' }, { key: 9, text: 'Science Fiction', value: 'Science Fiction' }, { key: 10, text: 'War', value: 'War' }, { key: 11, text: 'Western', value: 'Western' }];

const LandingGenre = (props) => (
  <div>
    <Header as='h3'>Choose a genre</Header>
      <Menu widths={1} >
      <Dropdown fluid selection
        placeholder='Select a genre'
        options={genreOptions} 
        onChange={props.handleGenreSelection}
        closeOnChange={true}
        scrolling={true}
        item={true}
      />
    </Menu>
  </div>
);

export default LandingGenre;
