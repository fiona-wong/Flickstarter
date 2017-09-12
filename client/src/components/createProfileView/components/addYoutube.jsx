import React from 'react';
import { Segment, Container, Grid, Step, Form, Button } from 'semantic-ui-react';


const AddYoutube = (props) => (

  <Grid columns={4}>

    <Grid.Column width={5}>
      <Step onClick={props.handleOnYoutubeClick} active={props.youtubeActive} completed={props.youtubeComplete}>
        <Step.Content>
          <Step.Title>Youtube</Step.Title>
          Show off your past work
        </Step.Content>
      </Step>
    </Grid.Column>

    <Grid.Column width={11}>
      {props.youtubeActive ? (
        <Form onSubmit={props.handleYoutubeSubmit}>
          <Form.Field>
            <Segment.Group horizontal>
              <Segment>
                <input name='currentYoutube' onBlur={props.youtubeAdd} onChange={props.handleChange} placeholder='sample of work' />
                <input name='currentYoutube' onBlur={props.youtubeAdd} onChange={props.handleChange} placeholder='sample of work' />
                <input name='currentYoutube' onBlur={props.youtubeAdd} onChange={props.handleChange} placeholder='sample of work' />
              </Segment>
              <Segment>
                <input name='currentYoutube' onBlur={props.youtubeAdd} onChange={props.handleChange} placeholder='sample of work' />
                <input name='currentYoutube' onBlur={props.youtubeAdd} onChange={props.handleChange} placeholder='sample of work' />
                <input name='currentYoutube' onBlur={props.youtubeAdd} onChange={props.handleChange} placeholder='sample of work' />
              </Segment>
            </Segment.Group>
          </Form.Field>
          <Button floated="right">Next</Button>
        </Form>
      ) : (<div></div>)}
    </Grid.Column>
  </Grid>
);

export default AddYoutube;
