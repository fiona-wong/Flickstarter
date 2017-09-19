import React from 'react';
import { Grid, Image, Modal, Segment } from 'semantic-ui-react';

const MessagesView = (props) => {
  if (props.message.sender_id === props.myself) {
    return <Grid.Row stretched>
      <Grid.Column floated='right' width={5}>
        <div className="bubble-right">
          {props.message.text}
        </div>
      </Grid.Column>
    </Grid.Row>;

  } else {
    return <Grid.Row stretched>
      <Grid.Column floated='left' width={5}>
        <div className="bubble-left">
          {props.message.text}
        </div>
      </Grid.Column>
    </Grid.Row>;

  }
};

export default MessagesView;
