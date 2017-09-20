import React from 'react';
import { Label, Grid, Image, Modal, Form, Button, Icon, Message } from 'semantic-ui-react';
import MessagesView from './messagesView.jsx';

const MessagesPreview = (props) => (
  <Modal key={props.index} onClose={props.handleMessageClose} onOpen={props.handleMessageClick} trigger={
    <Grid.Row key={props.index}>
      <Grid.Column textAlign="center" stretched width={2}>
        <Image centered size="tiny" src={props.message.sender ? props.message.sender.photo : props.message.receiver.photo}/>
        <br/>
        {props.message.sender ? props.message.sender.display : props.message.receiver.display}
      </Grid.Column>
      <Grid.Column width={14}>
        <strong>{props.message.subject}</strong>
        <br/>
        <Label attached="top right">{props.message.project.name}</Label>
        <br/>
        {props.message.text.length > 200 ?
          props.message.text.slice(0, 200) + '...' : props.message.text}
      </Grid.Column>
    </Grid.Row>
  }>
    <Modal.Header>Chat with {props.message.sender ? props.message.sender.display : props.message.receiver.display}</Modal.Header>
    <Modal.Content>
      <Grid>
        {props.targetMessages.map((message, index) => (
          <MessagesView
            key={index}
            myself={props.myself}
            message={message}
          />
        ))}
        <Grid.Row stretched>
          <Grid.Column stretched>
            <Form success={props.successMessage} onSubmit={props.sendReply}>
              <input name={props.message.sender_id === props.myself ? props.message.receiver_id : props.message.sender_id} onChange={props.messageChange} placeholder='Let them know if you are interested or not!'/><Button fluid animated><Button.Content visible>Send</Button.Content><Button.Content hidden><Icon name='send outline' /></Button.Content></Button>
              <Message
                success
                header='Message has been sent.'
              />
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
);

export default MessagesPreview;
