import React from 'react';
import { Grid, Step, Form, Button } from 'semantic-ui-react';
import EditName from './components/editName.jsx';
import $ from 'jquery';
import PickRole from './components/pickrole.jsx';
import AddLocation from './components/addlocation.jsx';
import AddDescription from './components/addDescription.jsx';
import AddWebsites from './components/addwebsite.jsx';

class SetupProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first: '',
      last: '',
      roles: [],
      chosenRole: [],
      location: '',
      about: '',
      linkedin: '',
      personalsite: '',
      youtube: '',
      photo: '',
      nameActive: true,
      roleActive: false,
      roleComplete: false,
      locationActive: false,
      locationComplete: false,
      descriptionActive: false,
      descriptionComplete: false,
      webActive: false,
      webComplete: false
    };
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRoleSelect = this.handleRoleSelect.bind(this);
    this.saveRoles = this.saveRoles.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  componentDidMount () {
    $.get('/editprofile/getroles', data => {
      let options = [];
      data.map(role => {
        options.push({key: role.id, text: role.position, value: role.position});
      });
      this.setState({
        roles: options
      });
    });
  }

  handleNameSubmit() {
    $.post('/editprofile/updateprofile', 
      {username: this.state.username, 
        first: this.state.first, 
        last: this.state.last,
        display: this.state.first + ' ' + this.state.last
      }, 
      (data) => {
        this.setState({
          nameActive: false,
          roleActive: true
        });
      });
  }

  handleRoleSelect(event, role) {
    event.preventDefault();
    this.setState({
      chosenRole: role.value
    });
  }

  saveRoles() {
    $.post('/editprofile/saveuserroles', 
      {userrole: this.state.chosenRole}, 
      (data) => {
        this.setState({
          roleActive: false,
          roleComplete: true,
          locationActive: true
        });
      });
  }

  handleLocation() {
    $.post('/editprofile/updateprofile', 
      {location: this.state.location}, 
      (data) => {
        this.setState({
          locationActive: false,
          locationComplete: true,
          descriptionActive: true
        });
      });
  }

  handleDescription() {
    $.post('/editprofile/updateprofile', 
      {about: this.state.about}, 
      (data) => {
        this.setState({
          descriptionActive: false,
          descriptionComplete: true
        });
      });
  }

  handleWebsite() {
    $.post('/editprofile/updateprofile', 
      {linkedin: this.state.linkedin,
        personalsite: this.state.personalsite}, 
      (data) => {
        this.setState({
          webActive: false,
          webComplete: true
        });
      });
	}


  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value;
    });
  }

  render() {
    return (
      <div>
        <Step.Group ordered vertical>
          <EditName 
            nameActive={this.state.nameActive}
            roleActive={this.state.roleActive}
            handleNameSubmit={this.handleNameSubmit}
            handleChange={this.handleChange}
          />
          <PickRole
            roleComplete={this.state.roleComplete}
            roleActive={this.state.roleActive}
            roles={this.state.roles}
            handleRoleSelect={this.handleRoleSelect}
            saveRoles={this.saveRoles}
            roleComplete={this.state.roleComplete}
<<<<<<< HEAD
          />

          <AddLocation
            locationActive={this.state.locationActive}
            handleLocation={this.handleLocation}
            handleChange={this.handleChange}
            locationComplete={this.state.locationComplete}
          />

          <AddDescription
            descriptionActive={this.state.descriptionActive}
            handleDescription={this.handleDescription}
            handleChange={this.handleChange}
            descriptionComplete={this.state.descriptionComplete}
          />

          <AddWebsites
            webActive={this.state.webActive}
            handleWebsite={this.handleWebsite}
            handleChange={this.handleChange}
            webComplete={this.state.webComplete}
            roles={this.state.roles}
          />

          <Grid columns={2}>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Youtube</Step.Title>
        Show off your past work
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
              <Step>
                <Step.Content>
                  <Step.Title>Upload Photo</Step.Title>
          Now vogue
                </Step.Content>
              </Step>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid></Step.Group>
      </div>
    );
  }
}

export default SetupProfile;