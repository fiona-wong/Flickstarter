import React from 'react';
import { Header, Button, Segment, Message } from 'semantic-ui-react';
import $ from 'jquery';
import moment from 'moment';
import LandingPage from './createProjectView/components/landingView/landingPage.jsx';
import ProjectImage from './createProjectView/components/projectImage.jsx';
import ProjectTitle from './createProjectView/components/projectTitle.jsx';
import ProjectBlurb from './createProjectView/components/projectBlurb.jsx';
import ProjectDescription from './createProjectView/components/projectDescription.jsx';
import ProjectGenre from './createProjectView/components/projectGenre.jsx';
import ProjectLocation from './createProjectView/components/projectLocation.jsx';
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
      incompleteField: false,
      saving: false,
      showSaveModal: false
    };
    
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
  }

  getWarningMessage() {
    return (
      <div id="saveProjectWarningAlert">
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
      let element = document.getElementById("saveProjectWarningAlert");
      element.scrollIntoView();
    }
  }

  componentWillMount() {
    let _this = this;
    $.ajax({
      url: `/projects/${_this.props.match.params.id}`,
      type: 'GET',
      success: (data) => {
        _this.setState({
          projectGenre: data.genre,
          projectTitle: data.name,
          projectLocation: data.location,
          projectDeadline: data.goal_deadline,
          projectBlurb: data.short_description,
          projectDescription: data.long_description,
          projectFundingGoal: data.goal_amount,
          projectImage: data.photo_url
        });
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
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
            <ProjectDeadline 
              projectDeadline={this.state.projectDeadline}
            />
            <ProjectFundingGoal 
              handleFundingGoalInput={this.handleInputChange}
              projectFundingGoal={this.state.projectFundingGoal}
            />
          </div>
          {this.state.saving ? <Button loading primary onClick={this.handleSaveClick}>Save</Button> : <Button primary onClick={this.handleSaveClick}>Save</Button>}
          {this.state.incompleteField ? this.getWarningMessage() : null}
        </Segment>
      </div>
    );
  }
}

export default EditProject;
