import React from 'react';
import { Grid, Step, Form, Button } from 'semantic-ui-react';


const EditName = (props) => (

  <Grid columns={2}>

    <Grid.Column width={5}>
      <Step active={props.nameActive} completed={props.roleActive}>
        <Step.Content>
          <Step.Title>Name</Step.Title>
      What's your name?
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      <Form onSubmit={props.handleNameSubmit}>
        <Form.Field>
          <label>Username</label>
          <input required={true} name='username' onChange={props.handleChange} placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input required={true} name='firstName' onChange={props.handleChange} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input required={true} name='lastName' onChange={props.handleChange} placeholder='Last Name' />
          <Button>Next</Button>
        </Form.Field>
      </Form>    
    </Grid.Column>
    
  </Grid>
);

export default EditName;