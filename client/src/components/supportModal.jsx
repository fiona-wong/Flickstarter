import React, {Component} from 'react';
import {Modal, Popup, Button, Container, Header, Dropdown, Input, Label, Divider} from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';



class SupportModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      isEnabled: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({amount: Number(parseFloat(event.target.value))});

    this.setState({
      amount: Number(parseFloat(event.target.value)),
      isEnabled: Number(parseFloat(event.target.value)) > 0
    }, () => {});
  }

  handleClick(event) {
    const {project, informer} = this.props;
    let amount = this.state.amount * 100;

    function handleToken(token) {
      token.amount = amount;
      token.project = project;

      fetch('/charge', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(token)
      })
        .then(output => {
          if (output.status === 200) {
            // add success modal
            console.log('donation went through');
            informer();
          } else {
            //if charge not processed
            //..do Something

            //if session expired
            if (output.status === 401) {
              window.location.href = '/login';
            }
          }
        });
    }

    var checkoutHandler = StripeCheckout.configure({
      key: 'pk_test_z9dPKyeuvYAaGJAEfmiiT6LD',
      locale: 'auto',
      bitcoin: true
    });
    checkoutHandler.open({amount, name: 'Sample Store', description: 'Example Purchase', token: handleToken});
  }

  render() {

    return (
      <div className='project-detail-support-modal'>
        <Input fluid labelPosition='right' type='text' placeholder='Amount'>
          <Label basic>$</Label>
          <input value={this.state.value} onChange={this.handleChange}/>
          <Label>.00</Label>
        </Input>
        <Button positive disabled={!this.state.isEnabled} onClick={this.handleClick}>
          Donate
        </Button>
        <Divider horizontal>Or</Divider>
        {/* <Dropdown text='Donate' icon='dollar' floating labeled button className='icon'>
          <Dropdown.Menu>
            <Dropdown.Divider/>
            <Dropdown.Menu scrolling>
              <Dropdown.Item text='Bitcoin' icon='bitcoin yellow'/>
              <Dropdown.Item text='Credit Card' icon='stripe blue'/>
            </Dropdown.Menu>
          </Dropdown.Menu>
        </Dropdown> */}

        <Modal dimmer='blurring' trigger={< Button color='blue'> Support
          </Button>}>
          <Modal.Header>Support Project</Modal.Header>
          <Modal.Content>
            <Popup trigger={< Button color='red' content='Contact Creator'/>} content={
              <Container>
                <Header as='h1'>This is Popup Content</Header>
              </Container>} position='top right'/>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default SupportModal;
