import React from 'react';
import { Input, Menu, Search } from 'semantic-ui-react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <Menu.Item>
          <Input icon='search' placeholder='Find an awesome project!' />
        </Menu.Item>
      </div>
    );
  }
}

export default SearchBar;