import React from 'react';
import { Grid, Image, Modal } from 'semantic-ui-react';
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
        <br/>
        {props.message.text.length > 200 ?
          props.message.text.slice(0, 200) + '...' : props.message.text}
      </Grid.Column>
    </Grid.Row>
  }>
    <Modal.Header>Chat with {props.message.sender.display}</Modal.Header>
    <Modal.Content>
      <Grid>

        {props.targetMessages.map((message, index) => (
          <MessagesView
            key={index}
            myself={props.myself}
            message={message}
          />
        ))}
      </Grid>
    </Modal.Content>
  </Modal>
);

export default MessagesPreview;
