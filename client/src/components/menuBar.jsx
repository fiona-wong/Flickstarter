import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, browserHistory } from 'react-router-dom';
import { Menu, Search, Segment, Dropdown, Image } from 'semantic-ui-react';
import CreateProject from './createProjectView/createProject.jsx';
import ExploreProjects from './exploreProjects.jsx';
import Profile from './profile.jsx';
import Messages from './messages.jsx';
import SearchBar from './searchBar.jsx';
import SetupProfile from './createProfileView/setupProfile.jsx';
import Home from './home.jsx';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick (e, {name}) {
    this.setState({
      activeItem: name
    });
  }

  render() {
    const {activeItem} = this.state;
    return (
      <div id='body-container'>
        <Menu id='menu-container' pointing secondary fluid fixed='top'>
          <Menu.Item as={Link} to={'/createproject'} name='Create Project' active={activeItem === 'Create Project'} onClick={this.handleItemClick} style={{marginLeft: '3%'}}/>
          <Menu.Item as={Link} to={'/'} name='View Projects' active={activeItem === 'View Projects'} onClick={this.handleItemClick} />
          <div className='basic-flex-centered-row'>
            <Image height='40' src='http://i.imgur.com/hIjqiJ0.png' />
          </div>
          <Menu.Menu position='right' />
          <Menu.Item as={Link} to={'/'} name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} style={{marginLeft: '4%'}}/>
          <Menu.Item as={Link} to={'/messages'} name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick} style={{marginLeft: '4%'}}/>
          <Menu.Item active={activeItem === 'Profile'} style={{marginRight: '3%'}}>
            <Dropdown pointing text='Profile'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={'/profile'} name='Profile' onClick={this.handleItemClick}>View Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to={'/setupprofile'} name='Profile' onClick={this.handleItemClick}>Edit Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to={'/profile'}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
        <Route path='/createproject' component={CreateProject} />
        <Route path='/exploreprojects' component={ExploreProjects} />
        <Route path='/messages' component={Messages} />
        <Route path='/profile' component={Profile} />
        <Route path='/setupprofile' component={SetupProfile} />
      </div>
    );
  }
}
export default MenuBar;
