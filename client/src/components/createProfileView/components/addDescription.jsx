import React from 'react';
import { Container, Grid, Step, Form, Button } from 'semantic-ui-react';


const AddDescription = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step onClick={props.handleOnDescriptionClick} active={props.descriptionActive} completed={props.descriptionComplete}>
        <Step.Content>
          <Step.Title>Description</Step.Title>
          Tell us about yourself:
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      {props.descriptionActive ? (
        <Container>
          <Form onSubmit={props.handleDescription}>
            <Form.Field>
              <textarea name='about' value={props.about} onChange={props.handleChange} placeholder='Write something about yourself and your prior experiences...' />
            </Form.Field>
            <Button floated="right">Next</Button>
          </Form>
        </Container>
      ) : (<div></div>)}
    </Grid.Column>
  </Grid>
);

export default AddDescription;
