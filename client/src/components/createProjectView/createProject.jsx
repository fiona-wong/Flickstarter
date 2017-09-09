import React from 'react';
import { Dropdown, Menu, Container, Header, Input, Button, Segment, Message, TextArea, Form, Image } from 'semantic-ui-react';
import $ from 'jquery';
import moment from 'moment';
import ImageUploader from '../imageUploader.jsx';
import SaveProjectModal from './components/saveProjectModal.jsx'

const genreOptions = [{ key: 1, text: 'Action', value: 'Action' }, { key: 2, text: 'Adventure', value: 'Adventure' }, { key: 3, text: 'Animated', value: 'Animated' }, { key: 4, text: 'Comedy', value: 'Comedy' }, { key: 5, text: 'Crime', value: 'Crime' }, { key: 6, text: 'Documentary', value: 'Documentary' }, { key: 7, text: 'Drama', value: 'Drama' }, { key: 8, text: 'Musical', value: 'Musical' }, { key: 9, text: 'Science Fiction', value: 'Science Fiction' }, { key: 10, text: 'War', value: 'War' }, { key: 11, text: 'Western', value: 'Western' }];

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
      currentPage: 'start',
      incompleteField: false,
      saving: false,
      showSaveModal: false
    };
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleProjectTitleInput = this.handleProjectTitleInput.bind(this);
    this.handleProjectLocationInput = this.handleProjectLocationInput.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.getWarningMessage = this.getWarningMessage.bind(this);
    this.handleProjectDurationInput = this.handleProjectDurationInput.bind(this);
    this.handleBlurbInput = this.handleBlurbInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleFundingGoalInput = this.handleFundingGoalInput.bind(this);
    this.getUploadWidget = this.getUploadWidget.bind(this);
  };

  handleGenreSelection(event, data) {
    this.setState({
      projectGenre: data.value, genreDropdownText: data.value, incompleteField: false
    });
  }

  handleProjectTitleInput(event, data) {
    this.setState({
      projectTitle: data.value, incompleteField: false
    });
  }

  handleProjectLocationInput(event, data) {
    this.setState({
      projectLocation: data.value, incompleteField: false
    });
  }

  handleProjectDurationInput(event, data) {
    this.setState({
      projectDuration: data.value, incompleteField: false
    });
  }

  handleBlurbInput(event, data) {
    this.setState({
      projectBlurb: data.value, incompleteField: false
    });
  }

  handleDescriptionInput(event, data) {
    this.setState({
      projectDescription: data.value, incompleteField: false
    });
  }

  handleFundingGoalInput(event, data) {
    this.setState({
      projectFundingGoal: data.value, incompleteField: false
    });
  }

  handleContinueClick(event) {
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
    let _this = this;
    if (this.state.projectGenre !== '' && this.state.projectTitle !== '' && this.state.projectLocation !== '' && this.state.projectDuration !== '' && this.state.projectBlurb !== '' && this.state.projectDescription !== '' && this.state.projectFundingGoal !== '' && this.state.projectImage !== '') {
      $.ajax({
        url: '/api/projects/new',
        type: 'POST',
        data: {
          name: this.state.projectTitle, 
          shortDescription: this.state.projectBlurb,
          longDescription: this.state.projectDescription,
          location: this.state.projectLocation,
          photoUrl: this.state.projectImage,
          goalAmount: this.state.projectFundingGoal,
          goalDeadline: moment().add(this.state.projectDuration, 'days').calendar(),
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

  componentDidUpdate() {
    if (this.state.incompleteField === true) {
      var element = document.getElementById("saveAlert");
      element.scrollIntoView();
    }
  }

  getWarningMessage() {
    return (
      <div id="saveAlert" style={{paddingTop: '5px'}}>
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

  render() {
    return (
      this.state.currentPage === 'start' ?
      <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '15px', marginTop: '55px'}}>
          <Header as='h1'>Create a project</Header>
        </div>
        <Segment
          raised
          style={{textAlign: 'center', width: '80%'}}
        > 
          <Container 
            style={{width: '50%', paddingBottom: '30px', marginTop: '3%', marginBottom: '3%'}}>
            <Header as='h3'>Choose a genre</Header>
              <div>
                <Menu widths={1} >
                  <Dropdown fluid selection
                    placeholder='Select a genre'
                    options={genreOptions} 
                    onChange={this.handleGenreSelection}
                    closeOnChange={true}
                    scrolling={true}
                    item={true}
                  />
                </Menu>
              </div>
            <Header as='h3'> Give your project a title</Header>
            <Input fluid
              onChange={this.handleProjectTitleInput}
            />
            <Header as='h3'> Enter your location</Header>
            <Input fluid
              placeholder='e.g. San Francisco, CA'
              onChange={this.handleProjectLocationInput}
            />
          </Container>
          <Button primary onClick={this.handleContinueClick}>Continue</Button>
          {
            this.state.incompleteField ? this.getWarningMessage() : null
          }
        </Segment>
      </div>
      :
      <div style={{width: '100%', height: '98%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '55px'}}>
        {this.state.showSaveModal ? <SaveProjectModal projectImage={this.state.projectImage} projectTitle={this.state.projectTitle} projectFundingGoal={this.state.projectFundingGoal} projectDescription={this.state.projectDescription} projectBlurb={this.state.projectBlurb} projectDuration={this.state.projectDuration} projectLocation={this.state.projectLocation} projectGenre={this.state.projectGenre} /> : null}
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '22px', backgroundColor: '#FFFFFF'}}>
          <Header as='h1'>Let's get into the details</Header>
        </div>
        <Segment raised style={{width: '100%', textAlign: 'center'}}>
          <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingBottom: '30px', marginTop: '7px'}}>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Project image</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <div>
                  <Image src={this.state.projectImage} size='medium' shape='rounded'/>
                </div>
                <ImageUploader getUploadWidget={this.getUploadWidget}/>
                <p> This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. </p>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Project title</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <Input style={{width: '50%'}}
                  value={this.state.projectTitle}
                  onChange={this.handleProjectTitleInput}
                />
                <p> Giving your project a clear, descriptive name will help people find it. </p>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Short blurb</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <Input fluid 
                  onChange={this.handleBlurbInput}
                  placeholder='Add your blurb here...'
                />
                <p> Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making. </p>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Full description</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <Form>
                  <TextArea autoHeight placeholder='Add your description here...' onChange={this.handleDescriptionInput}/>
                </Form>
                <p> Share your detailed plans with the world. It's up to you to make the case for your project. </p>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Genre</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <div style={{width: '25%'}}>
                  <Menu widths={1}>
                    <Dropdown compact selection
                      value={this.state.projectGenre}
                      options={genreOptions} 
                      onChange={this.handleGenreSelection}
                      closeOnChange={true}
                      scrolling={true}
                      item={true}
                    />
                  </Menu>
                </div>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Project location</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <Input style={{width: '50%'}}
                  value={this.state.projectLocation}
                  onChange={this.handleProjectLocationInput}
                />
                <p> Where will your project be created? </p>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Funding duration</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <Input style={{width: '70px'}}
                  placeholder='e.g. 30' 
                  onChange={this.handleProjectDurationInput}
                  label={{ basic: true, content: 'days' }}
                  labelPosition='right'
                />
                <p> How many days will your crowdfunding last? Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch. </p>
              </div>
            </div>
            <div style={{width: '98%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left', backgroundColor:'#F8F9FD', marginBottom: '15px', paddingTop: '15px', marginLeft: '1%'}}>
              <div style={{width: '24%', height: '100%', textAlign: 'left', paddingLeft: '15px'}}>
                <Header as='h4'>Funding goal</Header>
              </div>
              <div style={{width: '76%', textAlign: 'left', marginBottom: '15px', paddingRight: '15px'}}>
                <Input style={{width: '100px'}}
                  placeholder='e.g. 10,000' 
                  onChange={this.handleFundingGoalInput}
                  label={{ basic: true, content: '$' }}
                  labelPosition='left'
                />
                <p> Funding on Flickstarter is all-or-nothing. If your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project. </p>
              </div>
            </div>
          </div>
          {this.state.saving ? <Button loading primary onClick={this.handleSaveClick}>Save</Button> : <Button primary onClick={this.handleSaveClick}>Save</Button>}
          {this.state.incompleteField ? this.getWarningMessage() : null}
        </Segment>
      </div>
    );
  }
}

export default CreateProject;
