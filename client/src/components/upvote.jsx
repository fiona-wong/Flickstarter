import React from 'react';
import { Icon, Image, Popup, Button } from 'semantic-ui-react';

const Upvote = (props) =>{
  return (
    <div>
    {
      props.upvoted ? 
      <Button circular
        icon='thumbs up'
        id='upvote-button-clicked'
        onClick={props.handleUpvote}
      /> :
      <Popup
        trigger={
          <Button circular
            icon='thumbs up'
            id='upvote-button'
            onClick={props.handleUpvote}
          />
        }
        content='Upvote project'
        position='left center'
      />
    }
    </div>
  );
}

export default Upvote;