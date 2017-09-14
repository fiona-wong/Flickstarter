import React, { Component } from 'react';
import { Modal, Popup, Button, Container, Header } from 'semantic-ui-react';

const SupportModal = () => (
  <div>
    <Modal dimmer='blurring' trigger={<Button color='green'>Donate</Button>}>
      <Modal.Header>Donation Methods</Modal.Header>
      <Modal.Content>
        <Popup
          trigger={<Button color='red' content='Pay with Bitcoin' />}
          content={<Container><Header as='h1'>This is Popup Content</Header></Container>}
          position='top right'
        />
        <Popup
          trigger={<Button color='red' content='Pay with Credit Card' />}
          content={<Container><Header as='h1'>This is Popup Content</Header></Container>}
          position='top left'
        />
      </Modal.Content>
    </Modal>

    <Modal dimmer='blurring' trigger={<Button color='blue'>Support</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Popup
          trigger={<Button color='red' content='Contact Creator' />}
          content={<Container><Header as='h1'>This is Popup Content</Header></Container>}
          position='top right'
        />
      </Modal.Content>
    </Modal>
  </div>
);

export default SupportModal;
