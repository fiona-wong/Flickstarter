import React from 'react';
import $ from 'jquery';
import { Grid, Tab, Modal } from 'semantic-ui-react';
import MessagesPreview from './components/messagesPreview.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      received: [],
      sent: [],
      unread: [],
      read: [],
      senders: [],
      receivers: [],
      all: [],
      targetMessages: [],
      myself: null,
      replyMessage: '',
      targetReplyPerson: '',
      successMessage: false
    };
    this.messageChange = this.messageChange.bind(this);
    this.sendReply = this.sendReply.bind(this);
    this.handleMessageClose = this.handleMessageClose.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  componentDidMount() {
    $.get('/messages/inbox', data => {
      if (data.sentMessages) {
        data.sentMessages.forEach(message => {
          this.setState({
            all: this.state.all.concat([message])
          });
          if (!this.state.receivers.includes(message.receiver_id)) {
            this.setState({
              receivers: this.state.receivers.concat([message.receiver_id]),
              sent: this.state.sent.concat([message])
            });
          }
        });
        this.setState({
          myself: data.sentMessages[0].sender_id
        });
      }
      if (data.receivedMessages) {
        data.receivedMessages.forEach(message => {
          this.setState({
            all: this.state.all.concat([message])
          });
          if (!this.state.senders.includes(message.sender_id)) {
            this.setState({
              senders: this.state.senders.concat([message.sender_id])
            });
            if (message.viewed === false) {
              this.setState({
                unread: this.state.unread.concat([message])
              });
            } else {
              this.setState({
                read: this.state.read.concat([message])
              });
            }
          }
        });
        if (!this.state.myself) {
          this.setState({
            myself: data.receivedMessages[0].receiver_id
          });
        }
      }
    });
  }

  handleMessageClick(event, data) {
    console.log(data.trigger);
    $.post('/messages/get', {sender: this.state.unread[data.trigger.key].sender_id}, data => {
      this.setState({
        targetMessages: data
      });
    });
  }

  handleMessageClose() {
    this.setState({
      targetMessages: [],
      successMessage: false
    });
  }

  sendReply() {
    $.post('/messages/reply', {receiver_id: this.state.targetReplyPerson, text: this.state.replyMessage}, data => {
      this.setState({
        targetReplyPerson: '',
        replyMessage: '',
        successMessage: true
      });
    });
  }

  messageChange(event) {
    event.preventDefault();
    this.setState({
      targetReplyPerson: event.target.name,
      replyMessage: event.target.value
    });
  }


  render() {
    return (
      <div className="page-header-padding">
        <Tab menu={{ secondary: true, pointing: true }}
          panes={[{menuItem: `Unread (${this.state.unread.length})`, render: () => <Tab.Pane attached={false}>
            <Grid celled>
              {this.state.unread.map((message, index) => (
                <MessagesPreview
                  successMessage={this.state.successMessage}
                  messageChange={this.messageChange}
                  sendReply={this.sendReply}
                  myself={this.state.myself}
                  handleMessageClose={this.handleMessageClose}
                  targetMessages={this.state.targetMessages}
                  handleMessageClick={this.handleMessageClick}
                  index={index}
                  key={index}
                  message={message}
                />
              ))}
            </Grid>
          </Tab.Pane>},
          {menuItem: 'Read', render: () => <Tab.Pane attached={false}>
            <Grid celled>
              {this.state.read.map((message, index) => (
                <MessagesPreview
                  successMessage={this.state.successMessage}
                  messageChange={this.messageChange}
                  sendReply={this.sendReply}
                  myself={this.state.myself}
                  handleMessageClose={this.handleMessageClose}
                  targetMessages={this.state.targetMessages}
                  handleMessageClick={this.handleMessageClick}
                  index={index}
                  key={index}
                  message={message}
                />
              ))}
            </Grid>
          </Tab.Pane>},
          {menuItem: 'Sent', render: () => <Tab.Pane attached={false}>
            <Grid celled>
              {this.state.sent.map((message, index) => (
                <MessagesPreview
                  successMessage={this.state.successMessage}
                  messageChange={this.messageChange}
                  sendReply={this.sendReply}
                  myself={this.state.myself}
                  handleMessageClose={this.handleMessageClose}
                  targetMessages={this.state.targetMessages}
                  handleMessageClick={this.handleMessageClick}
                  index={index}
                  key={index}
                  message={message}
                />
              ))}
            </Grid>
          </Tab.Pane>}
          ]} />
      </div>
    );
  }
}

export default Messages;
