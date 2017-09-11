import React from 'react';
import {Header, Segment, Container, Button} from 'semantic-ui-react';
import LandingGenre from './components/LandingGenre.jsx';
import LandingTitle from './components/LandingTitle.jsx';
import LandingLocation from './components/LandingLocation.jsx';

const LandingPage = (props) => (
  <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
    <div style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '15px', marginTop: '55px'}}>
      <Header as='h1'>Create a project</Header>
    </div>
    <Segment raised style={{textAlign: 'center', width: '80%'}}> 
      <Container style={{width: '50%', paddingBottom: '30px', marginTop: '3%', marginBottom: '3%'}}>
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
