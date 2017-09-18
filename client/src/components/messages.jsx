import React from 'react';
import $ from 'jquery';
import { Grid, Tab } from 'semantic-ui-react';
import InboxPreview from './Inbox.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      received: [],
      sent: [],
      unread: [],
      senders: [],
      receivers: [],
      all: []
    };
  }

  componentDidMount() {
    $.get('/messages/inbox', data => {
      console.log(data.receivedMessages);
      // data.sentMessages.map(message => {
      //   this.setState({
      //     all: this.state.all.concat([message])
      //   });
      //   if (!this.state.receivers.includes(message.receiver_id)) {
      //     this.setState({
      //       receivers: this.state.receivers.concat([message.receiver_id])
      //     })
      //   }
      // });
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
          }
        }
      });
    });
  }


  render() {
    return (
      <div className="page-header-padding">
        <Tab menu={{ secondary: true, pointing: true }}
          panes={[{menuItem: 'Unread', render: () => <Tab.Pane attached={false}>
            <Grid celled>
              {this.state.unread.map((message, index) => (
                <InboxPreview
                  key={index}
                  message={message}
                />
              ))}
            </Grid>
          </Tab.Pane>},
          {menuItem: 'All', render: () => <Tab.Pane attached={false}>All Content</Tab.Pane>},
          {menuItem: 'Sent', render: () => <Tab.Pane attached={false}>Outbox Content</Tab.Pane>}
          ]} />
      </div>
    );
  }
}

export default Messages;
