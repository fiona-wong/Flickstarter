import React from 'react';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';


class Footer extends React.Component {
  render() {
    return (
      <div>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>What is FlickStarter?</List.Item>
                    <List.Item as='a'>Who are we?</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={2}>
                  <Header inverted as='h4' content='Support' />
                  <List link inverted>
                    <List.Item as='a'>FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header as='h4' inverted>FlickStarter</Header>
                  <p>Connecting independent filmakers with funding & talent since 2017.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Footer;

