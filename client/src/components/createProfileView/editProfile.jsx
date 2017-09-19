import React from 'react';
import { Grid, Step, Form, Button } from 'semantic-ui-react';
import EditName from './components/editName.jsx';
import $ from 'jquery';
import PickRole from './components/pickRole.jsx';
import AddLocation from './components/addLocation.jsx';
import AddDescription from './components/addDescription.jsx';
import AddWebsites from './components/addWebsite.jsx';
import AddYoutube from './components/addYoutube.jsx';
import UploadPhoto from './components/uploadProfilePhoto.jsx';
import { BrowserRouter as Router, Link, Route, browserHistory } from 'react-router-dom';
import Profile from '../profile.jsx';

class EditProfile extends React.Component {

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
      youtube: [],
      currentYoutube: '',
      photo: '',
      nameActive: true,
      nameComplete: false,
      roleActive: false,
      roleComplete: false,
      locationActive: false,
      locationComplete: false,
      descriptionActive: false,
      descriptionComplete: false,
      webActive: false,
      webComplete: false,
      youtubeActive: false,
      youtubeComplete: false,
      photoActive: false,
      readySubmit: false
    };
    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRoleSelect = this.handleRoleSelect.bind(this);
    this.saveRoles = this.saveRoles.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleYoutubeSubmit = this.handleYoutubeSubmit.bind(this);
    this.youtubeAdd = this.youtubeAdd.bind(this);
    this.getUploadWidget = this.getUploadWidget.bind(this);
    this.handleOnLocationClick = this.handleOnLocationClick.bind(this);
    this.handleOnNameClick = this.handleOnNameClick.bind(this);
    this.handleOnRoleClick = this.handleOnRoleClick.bind(this);
    this.handleOnDescriptionClick = this.handleOnDescriptionClick.bind(this);
    this.handleOnWebsiteClick = this.handleOnWebsiteClick.bind(this);
    this.handleOnYoutubeClick = this.handleOnYoutubeClick.bind(this);
    this.handleOnPhotoClick = this.handleOnPhotoClick.bind(this);
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
      $.get('/profile/u', data => {
        this.setState({
          username: data.profile.username,
          first: data.profile.first,
          last: data.profile.last,
          location: data.profile.location,
          about: data.profile.about,
          linkedin: data.profile.linkedin,
          personalsite: data.profile.personalsite,
          photo: data.profile.photo,
          youtubes: data.youtubes,
          projects: data.projects
        });
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
          nameComplete: true,
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
  handleOnLocationClick() {
    this.setState({
      locationActive: true,
      nameActive: false,
      roleActive: false,
      descriptionActive: false,
      webActive: false,
      photoActive: false,
      youtubeActive: false
    });
  }

  handleOnNameClick() {
    this.setState({
      locationActive: false,
      nameActive: true,
      roleActive: false,
      descriptionActive: false,
      webActive: false,
      photoActive: false,
      youtubeActive: false
    });
  }
  handleOnRoleClick() {
    this.setState({
      locationActive: false,
      nameActive: false,
      roleActive: true,
      descriptionActive: false,
      webActive: false,
      photoActive: false,
      youtubeActive: false
    });
  }

  handleOnDescriptionClick() {
    this.setState({
      locationActive: false,
      nameActive: false,
      roleActive: false,
      descriptionActive: true,
      webActive: false,
      photoActive: false,
      youtubeActive: false
    });
  }

  handleOnWebsiteClick() {
    this.setState({
      locationActive: false,
      nameActive: false,
      roleActive: false,
      descriptionActive: false,
      webActive: true,
      photoActive: false,
      youtubeActive: false
    });
  }

  handleOnYoutubeClick() {
    this.setState({
      locationActive: false,
      nameActive: false,
      roleActive: false,
      descriptionActive: false,
      webActive: false,
      youtubeActive: true,
      photoActive: false
    });
  }

  handleOnPhotoClick() {
    this.setState({
      locationActive: false,
      nameActive: false,
      roleActive: false,
      descriptionActive: false,
      webActive: false,
      youtubeActive: false,
      photoActive: true,
      readySubmit: true
    });
  }

  handleDescription() {
    $.post('/editprofile/updateprofile',
      {about: this.state.about},
      (data) => {
        this.setState({
          descriptionActive: false,
          descriptionComplete: true,
          webActive: true
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
          webComplete: true,
          youtubeActive: true
        });
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  youtubeAdd() {
    if (this.state.currentYoutube.length > 0) {
      this.setState({
        youtube: this.state.youtube.concat([this.state.currentYoutube]),
        currentYoutube: ''
      });
    }
  }

  handleYoutubeSubmit() {
    $.post('/editprofile/updateyoutube',
      {youtube: this.state.youtube},
      (data) => {
        this.setState({
          youtubeActive: false,
          youtubeComplete: true,
          photoActive: true
        });
      });
  }
  getUploadWidget() {
    let _this = this;
    cloudinary.openUploadWidget({
      cloud_name: 'dyrrwpemp',
      upload_preset: 'us2utltx',
      multiple: false,
      gravity: 'custom',
      cropping: 'server',
      cropping_show_back_button: true,
      cropping_aspect_ratio: 1},
    function(error, result) {
      _this.setState({
        photo: result[0].url
      });
      $.post('/editprofile/updateprofile',
        {photo: _this.state.photo},
        (data) => {
          _this.setState({
            photoActive: false,
            readySubmit: true
          });
        });
    });
  }


  render() {
    return (
      <div className='page-header-padding'>
        <Step.Group ordered vertical>
          <EditName
            first={this.state.first}
            last={this.state.last}
            username={this.state.username}
            nameActive={this.state.nameActive}
            roleActive={this.state.roleActive}
            handleNameSubmit={this.handleNameSubmit}
            handleChange={this.handleChange}
            handleOnNameClick={this.handleOnNameClick}
          />
          <PickRole
            roleComplete={this.state.roleComplete}
            roleActive={this.state.roleActive}
            roles={this.state.roles}
            handleRoleSelect={this.handleRoleSelect}
            saveRoles={this.saveRoles}
            roleComplete={this.state.roleComplete}
            handleOnRoleClick={this.handleOnRoleClick}
            chosenRole={this.state.chosenRole}
          />

          <AddLocation
            location={this.state.location}
            locationActive={this.state.locationActive}
            handleLocation={this.handleLocation}
            handleChange={this.handleChange}
            locationComplete={this.state.locationComplete}
            handleOnLocationClick={this.handleOnLocationClick}
          />

          <AddDescription
            about={this.state.about}
            descriptionActive={this.state.descriptionActive}
            handleDescription={this.handleDescription}
            handleChange={this.handleChange}
            descriptionComplete={this.state.descriptionComplete}
            handleOnDescriptionClick={this.handleOnDescriptionClick}
          />

          <AddWebsites
            linkedin={this.state.linkedin}
            personal={this.state.personalsite}
            webActive={this.state.webActive}
            handleWebsite={this.handleWebsite}
            handleChange={this.handleChange}
            webComplete={this.state.webComplete}
            handleOnWebsiteClick={this.handleOnWebsiteClick}
          />
          <AddYoutube
            youtubes={this.state.youtubes}
            handleChange={this.handleChange}
            handleYoutubeSubmit={this.handleYoutubeSubmit}
            youtubeAdd={this.youtubeAdd}
            youtubeActive={this.state.youtubeActive}
            youtubeComplete={this.state.youtubeComplete}
            handleOnYoutubeClick={this.handleOnYoutubeClick}
          />
          <UploadPhoto
            photo={this.state.photo}
            photoActive={this.state.photoActive}
            getUploadWidget={this.getUploadWidget}
            readySubmit={this.state.readySubmit}
            handleOnPhotoClick={this.handleOnPhotoClick}
          />
          <Button as={Link} to={'/profile'}>Submit</Button>
          <Route path='/profile' component={Profile} />
        </Step.Group>
      </div>
    );
  }
}

export default EditProfile;
