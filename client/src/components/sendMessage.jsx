import React from 'react';
import { Input, Form, TextArea, Modal, Icon, Button, Dropdown, Grid, Message } from 'semantic-ui-react';

const SendMessage = (props) => {
  let projectOptions = [];
  props.projects.map(project => {
    projectOptions.push({key: project.id, value: project.name, text: project.name});
  });

  return (
    <Modal trigger={<Button floated="right" size="mini" content='Message me!' icon='mail'/>} closeIcon>
      <Modal.Header>Send a message to {props.username}!</Modal.Header>
      <Modal.Content>
        <Form success={props.successMessage} onSubmit={props.submitMessage}>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Input fluid name="subject" onChange={props.handleChange} placeholder="Subject" />
              </Grid.Column>
              <Grid.Column>
                <Dropdown name="project" onChange={props.handleChange} placeholder='Project' fluid search selection options={projectOptions} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <TextArea name="message" onChange={props.handleChange} autoHeight placeholder='Write message here...' />
          <Button animated>
            <Button.Content visible>Send</Button.Content>
            <Button.Content hidden>
              <Icon name='send outline' />
            </Button.Content>
          </Button>
          <Message
            success
            header='Message has been sent.'
          />
        </Form>
      </Modal.Content>
    </Modal>
  );
};


export default SendMessage;
