import React from 'react';
import { Container, Grid, Step, Form, Button } from 'semantic-ui-react';


const AddDescription = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step active={props.descriptionActive} completed={props.descriptionComplete}>
        <Step.Content>
          <Step.Title>Description</Step.Title>
          Tell us about yourself:
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      <Container>
        <Form onSubmit={props.handleDescription}>
          <Form.Field>
            <textarea name='about' onChange={props.handleChange} placeholder='Write something about yourself and your prior experiences...' />
          </Form.Field>
          <Button floated="right">Next</Button>
        </Form>    
      </Container>
    </Grid.Column>
  </Grid>
);

export default AddDescription;