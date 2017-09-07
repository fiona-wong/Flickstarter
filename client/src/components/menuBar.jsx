import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Menu, Search } from 'semantic-ui-react';
import CreateProject from './createProject.jsx';
import ViewProjects from './viewProjects.jsx';
import Profile from './profile.jsx';
import Messages from './messages.jsx';
import SearchBar from './searchBar.jsx';


class MenuBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Menu pointing secondary>

            <Link to={'/createproject'}>
              <Menu.Item name='Create Project' />
            </Link>

            <Link to={'/viewprojects'}>
              <Menu.Item name='View Project' />
            </Link>

            <Menu.Menu position='right' />

            <SearchBar />

            <Link to={'/messages'}>
              <Menu.Item name='Messages' />
            </Link>

            <Link to={'/profile'}>
              <Menu.Item name='Profile' />
            </Link>

          </Menu>

          <Route path='/createproject' component={CreateProject} />
          <Route path='/viewprojects' component={ViewProjects} />
          <Route path='/messages' component={Messages} />
          <Route path='/profile' component={Profile} />
        </div>
    );
  }
}

export default MenuBar;