import React from 'react';
import { Container, Grid, Step, Form, Button } from 'semantic-ui-react';


const EditName = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step onClick={props.handleOnNameClick} active={props.nameActive} completed={props.nameComplete}>
        <Step.Content>
          <Step.Title>Name</Step.Title>
      What's your name?
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      {props.nameActive ? (
        <Container>
          <Form onSubmit={props.handleNameSubmit}>
            <Form.Field>
              <br/>
              <label>Username</label>
              <input required={true} name='username' value={props.username} onChange={props.handleChange} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>First Name</label>
              <input required={true} name='first' value={props.first} onChange={props.handleChange} placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input required={true} name='last' value={props.last} onChange={props.handleChange} placeholder='Last Name' />
              <Button floated="right">Next</Button>
            </Form.Field>
          </Form>
        </Container>
      ) : (<div></div>)}
    </Grid.Column>

  </Grid>
);

export default EditName;
