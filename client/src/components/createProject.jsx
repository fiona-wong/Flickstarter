import React from 'react';
import { Dropdown, Menu, Container, Header, Input, Button, Segment, Message, TextArea, Form } from 'semantic-ui-react';

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genreOptions: [
        { key: 1, text: 'Action', value: 'Action' }, { key: 2, text: 'Adventure', value: 'Adventure' }, { key: 3, text: 'Animated', value: 'Animated' }, { key: 4, text: 'Comedy', value: 'Comedy' }, { key: 5, text: 'Crime', value: 'Crime' }, { key: 6, text: 'Documentary', value: 'Documentary' }, { key: 7, text: 'Drama', value: 'Drama' }, { key: 8, text: 'Musical', value: 'Musical' }, { key: 9, text: 'Science Fiction', value: 'Science Fiction' }, { key: 10, text: 'War', value: 'War' }, { key: 11, text: 'Western', value: 'Western' }
      ],
      genreDropdownText: 'Select a genre',
      projectGenre: '',
      projectTitle: '',
      projectLocation: '',
      currentPage: 'start',
      incompleteField: false
    };
    this.handleGenreSelection = this.handleGenreSelection.bind(this);
    this.handleProjectTitleInput = this.handleProjectTitleInput.bind(this);
    this.handleProjectLocationInput = this.handleProjectLocationInput.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.getWarningMessage = this.getWarningMessage.bind(this);
  };

  handleGenreSelection(event, data) {
    this.setState({
      projectGenre: data.value,
      genreDropdownText: data.value
    });
  }

  handleProjectTitleInput(event, data) {
    this.setState({
      projectTitle: data.value
    });
  }

  handleProjectLocationInput(event, data) {
    this.setState({
      projectLocation: data.value
    });
  }

  getWarningMessage() {
    return (
      <Message color='red' negative>
        <Message.Header>You must complete each field to continue. </Message.Header>
      </Message>
    );
  }

  handleContinueClick(event) {
    if (this.state.genre !== '' && this.state.projectTitle !== '' && this.state.projectLocation) {
      this.setState({
        currentPage: 'details'
      });
    } else {
      this.setState({
        incompleteField: true
      });
    }
  }

  render() {
    return (
      this.state.currentPage === 'start' ?
      <div
        id="selection-component"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '15px'}}>
          <Header as='h1'>Create a project</Header>
        </div>
        <Segment
          raised
          style={{textAlign: 'center', width: '80%'}}
        >
          <Container
            style={{
              width: '50%',
              paddingBottom: '30px',
              marginTop: '3%',
              marginBottom: '3%'
            }}>
            <Header as='h3'>Choose a genre</Header>
              <div className="ui one column stackable center aligned page grid">
                <div>
                  <Menu >
                    <Dropdown fluid
                      text={this.state.genreDropdownText}
                      options={this.state.genreOptions}
                      onChange={this.handleGenreSelection}
                      closeOnChange={true}
                      scrolling={true}
                      item={true}
                    />
                  </Menu>
                </div>
              </div>
            <Header as='h3'> Give your project a title</Header>
            <Input fluid
              placeholder='title...'
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
      <div
        id="selection-component"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '15px'}}>
          <Header as='h1'>Lets get into the details.</Header>
        </div>
        <Segment raised style={{textAlign: 'center', width: '98%'}}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            paddingBottom: '30px'
          }}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Project Image</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <p> This is the first thing that people will see when they come across your project. Choose an image that’s crisp and text-free. </p>
              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Project Title</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <Input style={{width: '50%'}}
                  value={this.state.projectTitle}
                  onChange={this.handleProjectTitleInput}
                />
                <p> Giving your project a clear, descriptive name will help people find it. </p>
              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Short blurb</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <p> Give people a sense of what you’re doing. Skip “Help me” and focus on what you’re making. </p>
              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Full description</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <Form>
                  <TextArea autoHeight placeholder='Add your description here...' />
                </Form>
                <p> Here is where you tell the world your detailed plans. </p>
              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Genre</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>

              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Location</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <Input style={{width: '50%'}}
                  value={this.state.projectLocation}
                  onChange={this.handleProjectLocationInput}
                />
                <p> Where will your project be created? </p>
              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left'}}>
                <Header as='h3'>Funding Duration</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <p> Projects with shorter durations have higher success rates. You won’t be able to adjust your duration after you launch. </p>
              </div>
            </div>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'left'}}>
              <div style={{width: '28%', textAlign: 'left', paddingBottom: '15px'}}>
                <Header as='h3'>Funding Goal</Header>
              </div>
              <div style={{width: '72%', textAlign: 'left', paddingBottom: '15px'}}>
                <p> Funding on FlickStarter is all-or-nothing. If your goal isn’t met, no money will be collected. Your goal should reflect the minimum amount of funds you need to complete your project. </p>
              </div>
            </div>
          </div>
          <Button primary onClick={this.handleContinueClick}>Save
          </Button>
        </Segment>
      </div>
    );
  }
}

export default CreateProject;
