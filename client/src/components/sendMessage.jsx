import React from 'react';
import { Form, TextArea, Modal, Icon, Button } from 'semantic-ui-react';

const SendMessage = (props) => (
  <Modal trigger={<Button floated="right" size="mini" content='Message Me!' icon='mail'/>}>
    <Modal.Header>Send a Message to {props.username}!</Modal.Header>
    <Modal.Content>
      <Form onSubmit={props.submitMessage}>
        <TextArea onChange={props.handleChange} autoHeight placeholder='Write message here...' />
        <Button animated>
          <Button.Content visible>Send</Button.Content>
          <Button.Content hidden>
            <Icon name='send outline' />
          </Button.Content>
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default SendMessage;
