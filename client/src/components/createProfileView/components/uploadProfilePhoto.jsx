import React from 'react';
import { Image, Container, Grid, Step, Button } from 'semantic-ui-react';
import ImageUploader from '../../imageUploader.jsx';
import Profile from '../../profile.jsx';

const UploadPhoto = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step onClick={props.handleOnPhotoClick} active={props.photoActive} completed={props.photoComplete}>
        <Step.Content>
          <Step.Title>Upload Photo</Step.Title>
          Now vogue
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      {props.photoActive ? (
        <Container>
          <ImageUploader getUploadWidget={props.getUploadWidget}/>
        </Container>
      ) : (<div></div>)}
      {props.readySubmit ? (
        <Container>
          <Image src={props.photo}/>
        </Container>
      ) : (<div></div>)}
    </Grid.Column>
  </Grid>
);

export default UploadPhoto;
