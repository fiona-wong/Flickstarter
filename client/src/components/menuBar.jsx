import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Menu, Search, Segment, Dropdown } from 'semantic-ui-react';
import CreateProject from './createProject.jsx';
import ViewProjects from './viewProjects.jsx';
import Profile from './profile.jsx';
import Messages from './messages.jsx';
import SearchBar from './searchBar.jsx';
import SetupProfile from '../SetupProfile.jsx';


class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  };

  handleItemClick (e, {name}) {
    console.log(name);
    this.setState({ 
      activeItem: name 
    });
  };

  render() {
    const {activeItem} = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Link to={'/createproject'} style={{textDecoration: 'none'}}>
            <Menu.Item name='Create Project' active={activeItem === 'Create Project'} onClick={this.handleItemClick}/>
          </Link>

          <Link to={'/viewprojects'} style={{textDecoration: 'none'}}>
            <Menu.Item name='View Project' active={activeItem === 'View Project'} onClick={this.handleItemClick}/>
          </Link>

          <Menu.Menu position='right' />

          <Link to={'/messages'} style={{textDecoration: 'none'}}>
            <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick}/>
          </Link>
          <Menu.Item name='Profile' active={activeItem === 'Profile'}>
            <Dropdown pointing text='Profile'>
              <Dropdown.Menu>
                <Link to={'/profile'} style={{textDecoration: 'none'}} >
                  <Dropdown.Item name='Profile' onClick={this.handleItemClick}>View Profile</Dropdown.Item>
                </Link>
                <Link to={'/profile'} style={{textDecoration: 'none'}} >
                  <Dropdown.Item name='Profile' onClick={this.handleItemClick}>Edit Profile</Dropdown.Item>
                </Link>
                <Link to={'/profile'} style={{textDecoration: 'none'}}>
                  <Dropdown.Item >Log Out</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

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

// TEMPORARILY SAVING THIS CODE
// <Link to={'/profile'} style={{textDecoration: 'none'}}>
//   <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick}/>
// </Link>