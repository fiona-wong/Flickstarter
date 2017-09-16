import React, { Component } from 'react';
import { Modal, Popup, Button, Container, Header, Dropdown, Input } from 'semantic-ui-react';


const SupportModal = () => (
  <div className='basic-flex-centered-row'>
    <Dropdown text='Donate' icon='dollar' floating labeled button className='icon'>
      <Dropdown.Menu>
        <Dropdown.Divider />
        <Dropdown.Menu scrolling>
          <Dropdown.Item text='Bitcoin' icon='bitcoin yellow'/>
          <Dropdown.Item text='Credit Card' icon='stripe blue'/>
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>

    <Modal dimmer='blurring' trigger={<Button color='blue'>Support</Button>}>
      <Modal.Header>Support Project</Modal.Header>
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
