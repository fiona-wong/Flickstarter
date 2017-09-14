import React from 'react';
import { Header, Button, Segment, Message } from 'semantic-ui-react';
import $ from 'jquery';
import moment from 'moment';
import LandingPage from './components/landingView/landingPage.jsx';
import ProjectImage from './components/projectImage.jsx';
import ProjectVideo from './components/projectVideo.jsx';
import ProjectTitle from './components/projectTitle.jsx';
import ProjectBlurb from './components/projectBlurb.jsx';
import ProjectDescription from './components/projectDescription.jsx';
import ProjectGenre from './components/projectGenre.jsx';
import ProjectLocation from './components/projectLocation.jsx';
import ProjectDuration from './components/projectDuration.jsx';
import ProjectFundingGoal from './components/projectFundingGoal.jsx';
import SaveProjectModal from './components/saveProjectModal.jsx';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectGenre: '',
      projectTitle: '',
      projectLocation: '',
      projectDuration: '',
      projectBlurb: '',
      projectDescription: '',
      projectFundingGoal: '',
      projectImage: '',
      projectVideo: '',
      projectId: '',
      currentPage: 'start',
      incompleteField: false,
      saving: false,
      showSaveModal: false
    };
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.getWarningMessage = this.getWarningMessage.bind(this);
    this.getUploadWidget = this.getUploadWidget.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
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

  handleContinueClick(event) {
    event.preventDefault();
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation) {
      this.setState({
        currentPage: 'details',
        incompleteField: false
      });
    } else {
      this.setState({
        incompleteField: true
      });
    }
  }

  handleSaveClick(event) {
    event.preventDefault();
    let _this = this;
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation !== '' && this.state.projectDuration !== '' && this.state.projectBlurb !== '' && this.state.projectDescription !== '' && this.state.projectFundingGoal !== '' && this.state.projectImage !== '') {
      $.ajax({
        url: '/projects/new',
        type: 'POST',
        data: {
          name: this.state.projectTitle, 
          shortDescription: this.state.projectBlurb,
          longDescription: this.state.projectDescription,
          location: this.state.projectLocation,
          photoUrl: this.state.projectImage,
          videoUrl: this.state.projectVideo,
          goalAmount: this.state.projectFundingGoal,
          goalDeadline: moment().add(this.state.projectDuration, 'days').calendar(),
          genre: this.state.projectGenre
        },
        success: (data) => {
          _this.setState({
            saving: false,
            showSaveModal: true,
            projectId: data.id
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

  render() {
    return (
      this.state.currentPage === 'start' ?
      <LandingPage 
        handleGenreSelection={this.handleGenreSelection}
        handleInputChange={this.handleInputChange}
        getWarningMessage={this.getWarningMessage}
        handleContinueClick={this.handleContinueClick}
        incompleteField={this.state.incompleteField}
      />
      :
      <div id='create-project-detail-body'>
        {
          this.state.showSaveModal ? 
          <SaveProjectModal 
            projectImage={this.state.projectImage}
            projectVideo={this.state.projectVideo} 
            projectTitle={this.state.projectTitle} 
            projectFundingGoal={this.state.projectFundingGoal} 
            projectDescription={this.state.projectDescription} 
            projectBlurb={this.state.projectBlurb} 
            projectDeadline={moment().add(this.state.projectDuration, 'days').calendar()} 
            projectLocation={this.state.projectLocation} 
            projectGenre={this.state.projectGenre} 
            projectId={this.state.projectId}
          /> : null
        }
        <div id='create-project-detail-header'>
          <Header as='h1'>Let's get into the details</Header>
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
            <ProjectBlurb handleBlurbInput={this.handleInputChange}/>
            <ProjectDescription handleDescriptionInput={this.handleInputChange}/>
            <ProjectGenre 
              handleGenreSelection={this.handleGenreSelection} 
              projectGenre={this.state.projectGenre}
            />
            <ProjectLocation 
              handleProjectLocationInput={this.handleInputChange} 
              projectLocation={this.state.projectLocation}
            />
            <ProjectDuration handleProjectDurationInput={this.handleInputChange}/>
            <ProjectFundingGoal handleFundingGoalInput={this.handleInputChange}/>
          </div>
          {this.state.saving ? <Button loading primary onClick={this.handleSaveClick}>Save</Button> : <Button primary onClick={this.handleSaveClick}>Save</Button>}
          {this.state.incompleteField ? this.getWarningMessage() : null}
        </Segment>
      </div>
    );
  }
}

export default CreateProject;
