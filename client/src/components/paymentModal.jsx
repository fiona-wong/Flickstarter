import React, { Component } from 'react';
import { Modal, Popup, Button, Container, Header } from 'semantic-ui-react';

const PaymentModal = () => (
  <div>
    <Modal trigger={<Button color='green'>Normal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Popup
        trigger={<Button color='green' content='Will show Popup Content' />}
        content={<Container><Header as='h1'>This is Popup Content</Header></Container>}
        position='top right'
        />
      </Modal.Content>
    </Modal>

    <Modal dimmer='blurring' trigger={<Button color='red'>Blurring</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Popup
        trigger={<Button color='red' content='Will be blurred on background' />}
        content={<Container><Header as='h1'>This is Popup Content</Header></Container>}
        position='top right'
        />
      </Modal.Content>
    </Modal>
  </div>
);

export default PaymentModal;
