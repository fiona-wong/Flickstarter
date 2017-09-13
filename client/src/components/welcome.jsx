import React from 'react';
import { Button, Container, Header, Icon, Segment, Visibility } from 'semantic-ui-react';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Visibility>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 400, padding: '1em 1em' }}
            vertical
          >
            <Container text>
              <Header
                as='h1'
                content='Flickstarter'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: 'em' }}
              />
              <Header
                as='h2'
                content='Connecting independent filmmakers with funding & talent.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <Button primary size='huge'>
                Get Started
                <Icon name='right arrow' />
              </Button>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default Welcome;





