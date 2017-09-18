import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const InboxPreview = (props) => (
  <Grid.Row>
    <Grid.Column textAlign="center" stretched width={2}>
      <Image centered size="tiny" src={props.message.sender.photo}/>
      <br/>
      {props.message.sender.display}
    </Grid.Column>
    <Grid.Column width={14}>
      <strong>{props.message.subject}</strong>
      <br/>
      <br/>
      {props.message.text.length > 200 ?
        props.message.text.slice(0, 200) + '...' : props.message.text}
    </Grid.Column>
  </Grid.Row>
);

export default InboxPreview;
