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
      targetMessages: []
    };
    this.handleMessageClose = this.handleMessageClose.bind(this);
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  componentDidMount() {
    $.get('/messages/inbox', data => {
      console.log(data);
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
    });
  }

  handleMessageClick(event, data) {
    $.post('/messages/get', {sender: this.state.unread[data.trigger.key].sender_id}, data => {
      data.sentMessages.forEach(message => {
        this.setState({
          targetMessages: this.state.targetMessages.concat([message])
        });
      });
      data.receivedMessages.forEach(message => {
        this.setState({
          targetMessages: this.state.targetMessages.concat([message])
        });
      });
    });

  }

  handleMessageClose() {
    this.setState({
      targetMessages: []
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
