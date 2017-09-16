import React from 'react';
import { Link, Route, browserHistory } from 'react-router-dom';
import { Dropdown, Image, Menu, Icon } from 'semantic-ui-react';
import CreateProject from './createProjectView/createProject.jsx';
import ExploreProjects from './exploreProjects.jsx';
import Profile from './profile.jsx';
import Messages from './messages.jsx';
import EditProfile from './createProfileView/editProfile.jsx';
import Home from './home.jsx';
import EditProject from './editProject.jsx';
import ProjectDetails from './projectDetailView/projectDetails.jsx';

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: '',
      profileClicked: false
    };
    this.getStyle = this.getStyle.bind(this);
  }

  getStyle() {
    return {
      borderColor: this.state.activePath.includes('profile') ? 'black' : null,
      fontWeight: this.state.activePath.includes('profile') ? '700' : null,
      marginRight: '3%'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activePath: nextProps.url.pathname
    });
  }

  render() {
    const {activePath} = this.state;
    return (
      <div className='body-container'>
        <Menu id='menu-container' pointing secondary fluid fixed='top'>
          <Menu.Item
            as={Link}
            to={'/'}
            className='menu-icon-container'
            active={activePath === '/'}
            style={{marginLeft: '3%'}}
          >
            <Icon name='home' size='big' />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={'/createproject'}
            name='Create Project'
            active={activePath === '/createproject' || activePath.includes('/editproject')}
          />
          <Menu.Item
            as={Link}
            to={'/exploreprojects'}
            name='Explore Projects'
            active={activePath.includes('projects')}
          />
          <div className='basic-flex-centered-row'>
            <Image height='40' src='http://i.imgur.com/hIjqiJ0.png' />
          </div>
          <Menu.Menu position='right' />
          <Menu.Item
            as={Link}
            to={'/messages'}
            name='Messages'
            active={activePath === '/messages'}
            style={{marginLeft: '7%'}}
          />
          <Menu.Item
            as={Dropdown}
            pointing={true}
            text='Profile'
            style={this.getStyle()}
          >
            <Dropdown.Menu >
              <Dropdown.Item as={Link} to={'/profile'} name='Profile'>View Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to={'/editprofile'} name='Profile'>Edit Profile</Dropdown.Item>
              <Dropdown.Item as={Link} to={'/logout'}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Menu.Item>
        </Menu>
        <Route path='/createproject' component={CreateProject} />
        <Route path='/exploreprojects' component={ExploreProjects} />
        <Route path='/messages' component={Messages} />
        <Route strict path='/profile' component={Profile} />
        <Route path='/editprofile' component={EditProfile} />
        <Route path='/editproject/:id' component={EditProject} />
        <Route path='/projects/:id' component={ProjectDetails} />
      </div>
    );
  }
}
export default MenuBar;
