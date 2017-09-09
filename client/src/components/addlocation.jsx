import React from 'react';
import { Container, Grid, Step, Form, Button } from 'semantic-ui-react';


const AddLocation = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step active={props.locationActive} completed={props.locationComplete}>
        <Step.Content>
          <Step.Title>Location</Step.Title>
          Where are you located?
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      {props.locationActive ? (
        <Container>
          <Form onSubmit={props.handleLocation}>
            <Form.Field>
              <input required={true} name='location' onChange={props.handleChange} placeholder='e.g. San Francisco, CA' />
            </Form.Field>
            <Button floated="right">Next</Button>
          </Form>
        </Container>
      ) : (<div></div>)}
    </Grid.Column>
  </Grid>
);

export default AddLocation;
