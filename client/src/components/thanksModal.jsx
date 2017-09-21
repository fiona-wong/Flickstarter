import React, { Component } from 'react';
import { Button, Modal, Image } from 'semantic-ui-react';


class ThanksModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    // this.show = this.show.bind(this);
    this.close = this.close.bind(this);
  }

  componentWillMount() {
    this.show('tiny');
  }

  show(size) {
    console.log(size);
    this.setState({
      size: size,
      open: true
    });
  }

  close() {
    this.setState({
      open: false
    });
  }

  render() {
    const { open, size } = this.state;

    return (
      <div>

        <Modal size={size} open={true} onClose={this.close}>
          <Modal.Header>
            Thank You For Your Donation!
          </Modal.Header>
          <Modal.Content image>
            <Image wrapped size='small' src='https://d2mpxrrcad19ou.cloudfront.net/item_images/169815/3353727_fullsize.jpg' />
            <Modal.Description>
              <p>By donating to this project, you are helping independent filmmakers fulfill their dreams!</p>
            </Modal.Description>
          </Modal.Content>
            <Modal.Actions>
              <Button positive icon='checkmark' labelPosition='right' content="You're Welcome!" />
            </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ThanksModal;