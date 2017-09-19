import React from 'react';
import { Header, Button, Segment, Message, Icon } from 'semantic-ui-react';
import $ from 'jquery';
import moment from 'moment';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import LandingPage from './createProjectView/components/landingView/landingPage.jsx';
import ProjectImage from './createProjectView/components/projectImage.jsx';
import ProjectVideo from './createProjectView/components/projectVideo.jsx';
import ProjectTitle from './createProjectView/components/projectTitle.jsx';
import ProjectBlurb from './createProjectView/components/projectBlurb.jsx';
import ProjectDescription from './createProjectView/components/projectDescription.jsx';
import ProjectGenre from './createProjectView/components/projectGenre.jsx';
import ProjectLocation from './createProjectView/components/projectLocation.jsx';
import ProjectRoles from './createProjectView/components/projectRoles.jsx';
import ProjectDeadline from './createProjectView/components/projectDeadline.jsx';
import ProjectFundingGoal from './createProjectView/components/projectFundingGoal.jsx';
import SaveProjectModal from './createProjectView/components/saveProjectModal.jsx';

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectGenre: '',
      projectTitle: '',
      projectLocation: '',
      projectDeadline: '',
      projectBlurb: '',
      projectDescription: '',
      projectFundingGoal: '',
      projectImage: '',
      projectVideo: '',
      projectRoles: [],
      roleOptions: [],
      incompleteField: false,
      saving: false,
      showSaveModal: false
    };
    
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRoleSelection = this.handleRoleSelection.bind(this);
    this.getWarningMessage = this.getWarningMessage.bind(this);
    this.getUploadWidget = this.getUploadWidget.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleEditProjectClick = this.handleEditProjectClick.bind(this);
  };

  handleGenreSelection(event, data) {
    event.preventDefault();
    this.setState({
      projectGenre: data.value, genreDropdownText: data.value, incompleteField: false
    });
  }

  handleInputChange(event, data) {
    event.preventDefault();
    this.setState({
      [event.target.name]: data.value,
      incompleteField: false
    });
  }

  handleRoleSelection(event, data) {
    event.preventDefault();
    this.setState({
      projectRoles: data.value,
      incompleteField: false
    });
  }

  handleEditProjectClick() {
    this.setState({
      showSaveModal: false
    });
  }

  handleSaveClick(event) {
    event.preventDefault();
    let _this = this;
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation !== '' && this.state.projectBlurb !== '' && this.state.projectDescription !== '' && this.state.projectFundingGoal !== '' && this.state.projectImage !== '') {
      $.ajax({
        url: `/projects/update/${this.props.match.params.id}`,
        type: 'PUT',
        data: {
          name: this.state.projectTitle, 
          short_description: this.state.projectBlurb,
          long_description: this.state.projectDescription,
          location: this.state.projectLocation,
          photo_url: this.state.projectImage,
          video_url: this.state.projectVideo,
          goal_amount: this.state.projectFundingGoal,
          genre: this.state.projectGenre
        },
        success: () => {
          _this.setState({
            saving: false,
            showSaveModal: true
          });
        },
        error: (err) => {
          console.log(err.statusText, err);
        }
      });
      this.setState({
        saving: true,
        incompleteField: false
      });
    } else {
      this.setState({
        incompleteField: true
      });
    }
    $.ajax({
      url: `/openRoles/update/${this.props.match.params.id}`,
      type: 'POST',
      data: {
        openRoles: this.state.projectRoles
      },
      success: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  getWarningMessage() {
    return (
      <div id="save-project-warning-alert">
        <Message color='red' negative>
          <Message.Header>You must complete each field to continue. </Message.Header>
        </Message>
      </div>
    )
  }

   getUploadWidget() {
    let _this = this;
    cloudinary.openUploadWidget({ cloud_name: 'dyrrwpemp', upload_preset: 'us2utltx'},
      function(error, result) {
        _this.setState({
          projectImage: result[0].url
        });
      });
  }

  componentDidUpdate() {
    if (this.state.incompleteField === true) {
      let element = document.getElementById("save-project-warning-alert");
      element.scrollIntoView();
    }
  }

  componentDidMount() {
    $.ajax({
      url: `/projects/${this.props.match.params.id}`,
      type: 'GET',
      success: (data) => {
        this.setState({
          projectGenre: data.project.genre,
          projectTitle: data.project.name,
          projectLocation: data.project.location,
          projectDeadline: data.project.goal_deadline,
          projectBlurb: data.project.short_description,
          projectDescription: data.project.long_description,
          projectFundingGoal: data.project.goal_amount,
          projectImage: data.project.photo_url,
          projectVideo: data.project.video_url,
          projectRoles: data.openRoles,
          projectId: data.project.id
        });
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
    $.get('/editprofile/getroles', data => {
      let options = [];
      data.map(role => {
        options.push({key: role.id, text: role.position, value: role.position});
      });
      this.setState({
        roleOptions: options
      });
    });
  }

  render() {
    return (
      <div id='create-project-detail-body'>
        {
          this.state.showSaveModal ? 
          <SaveProjectModal 
            handleEditProjectClick={this.handleEditProjectClick}
            projectImage={this.state.projectImage} 
            projectVideo={this.state.projectVideo} 
            projectTitle={this.state.projectTitle} 
            projectFundingGoal={this.state.projectFundingGoal} 
            projectDescription={this.state.projectDescription} 
            projectBlurb={this.state.projectBlurb} 
            projectDeadline={this.state.projectDeadline} 
            projectLocation={this.state.projectLocation} 
            projectGenre={this.state.projectGenre} 
            projectId={this.props.match.params.id}
          /> : null
        }
        <div id='create-project-detail-header'>
          <Header as='h1'>Edit your project</Header>
        </div>
        <Segment raised id='create-project-detail-segment'>
          <div id='create-project-detail-container'>
            <ProjectImage 
              getUploadWidget={this.getUploadWidget} 
              projectImage={this.state.projectImage}
            />
            <ProjectVideo 
              handleProjectVideoInput={this.handleInputChange} 
              projectVideo={this.state.projectVideo}
            />
            <ProjectTitle 
              handleProjectTitleInput={this.handleInputChange} 
              projectTitle={this.state.projectTitle}
            />
            <ProjectBlurb 
              handleBlurbInput={this.handleInputChange}
              projectBlurb={this.state.projectBlurb}
            />
            <ProjectDescription 
              handleDescriptionInput={this.handleInputChange}
              projectDescription={this.state.projectDescription}
            />
            <ProjectGenre 
              handleGenreSelection={this.handleGenreSelection} 
              projectGenre={this.state.projectGenre}
            />
            <ProjectLocation 
              handleProjectLocationInput={this.handleInputChange} 
              projectLocation={this.state.projectLocation}
            />
            <ProjectRoles 
              handleRoleSelection={this.handleRoleSelection}
              projectRoles={this.state.projectRoles}
              roleOptions={this.state.roleOptions}
            />
            <ProjectDeadline 
              projectDeadline={this.state.projectDeadline}
            />
            <ProjectFundingGoal 
              handleFundingGoalInput={this.handleInputChange}
              projectFundingGoal={this.state.projectFundingGoal}
            />
          </div>
          <div className='basic-flex-centered-row'>
            <Button as={Link} to={'/profile'} color='blue' primary>
              <Icon name='arrow left' /> Back
            </Button>
            {
              this.state.saving ? 
              <Button loading primary onClick={this.handleSaveClick}>
                <Icon name='save' /> Save
              </Button> : 
              <Button primary onClick={this.handleSaveClick}>
                <Icon name='save' /> Save
              </Button>
            }
          </div>
          {this.state.incompleteField ? this.getWarningMessage() : null}
        </Segment>
      </div>
    );
  }
}

export default EditProject;
