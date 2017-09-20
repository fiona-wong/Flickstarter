import React from 'react';
import {Header, Segment, Container, Button} from 'semantic-ui-react';
import LandingGenre from './components/landingGenre.jsx';
import LandingTitle from './components/landingTitle.jsx';
import LandingLocation from './components/landingLocation.jsx';

const LandingPage = (props) => (
  <div id='landing-flex-centered-column'>
    <div id='landing-header'>
      <Header as='h1'>Create a project</Header>
    </div>
    <Segment raised id='landing-segment'> 
      <Container id='landing-container'>
        <LandingGenre handleGenreSelection={props.handleGenreSelection}/>
        <LandingTitle handleProjectTitleInput={props.handleInputChange}/>
        <LandingLocation handleProjectLocationInput={props.handleInputChange}/>
      </Container>
      <Button primary onClick={props.handleContinueClick}>Continue</Button>
      {
        props.incompleteField ? props.getWarningMessage() : null
      }
    </Segment>
  </div>
);

export default LandingPage;
