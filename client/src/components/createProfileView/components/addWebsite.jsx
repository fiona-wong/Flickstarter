import React from 'react';
import { Container, Grid, Step, Form, Button } from 'semantic-ui-react';


const AddWebsites = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step active={props.webActive} completed={props.webComplete}>
        <Step.Content>
          <Step.Title>LinkedIn/Personal Website</Step.Title>
          Let's connect!
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      {props.webActive ? (
        <Container>
          <Form onSubmit={props.handleWebsite}>
            <Form.Field>
              <input name='linkedin' onChange={props.handleChange} placeholder='LinkedIn' />
            </Form.Field>
            <Form.Field>
              <input name='personalsite' onChange={props.handleChange} placeholder='Personal Website' />
            </Form.Field>
            <Button floated="right">Next</Button>
          </Form>
        </Container>
      ) : (<div></div>)}
    </Grid.Column>
  </Grid>
);

export default AddWebsites;
