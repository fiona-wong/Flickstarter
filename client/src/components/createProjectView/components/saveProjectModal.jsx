import React from 'react';
import ViewProjects from '../../viewProjects.jsx';
import { Button, Header, Icon, Modal, Image, List } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class SaveProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.commafy = this.commafy.bind(this);
  };

  commafy(number) {
    let str = number.toString().split('.');
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
  }

  render() {
    return (
      <div>
        <Modal open={true} >
          <Modal.Header style={{textAlign: 'center'}}>Success!</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' shape='rounded' src={this.props.projectImage}/>
            <Modal.Description>
              <Header>You've created a Flickstarter project. Crowdfunding for {this.props.projectTitle} starts now!</Header>
              <h5>You can edit your project any time during crowdfunding by navigating to My Projects.</h5>
              <List divided relaxed>
                <List.Item>
                  <List.Header>Title</List.Header>
                  {this.props.projectTitle}
                </List.Item>
                <List.Item>
                  <List.Header>Short blurb</List.Header>
                  {this.props.projectBlurb}
                </List.Item>
                <List.Item>
                  <List.Header>Full description</List.Header>
                  {this.props.projectDescription}
                </List.Item>
                <List.Item>
                  <List.Header>Genre</List.Header>
                  {this.props.projectGenre}
                </List.Item>
                <List.Item>
                  <List.Header>Location</List.Header>
                  {this.props.projectLocation}
                </List.Item>
                <List.Item>
                  <List.Header>Duration</List.Header>
                  {this.props.projectDuration} days
                </List.Item>
                <List.Item>
                  <List.Header>Funding goal</List.Header>
                  ${this.commafy(this.props.projectFundingGoal)}
                </List.Item>
              </List>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Link to={'/viewprojects'} >
              <Button color='blue' basic>
                <Icon name='home' /> Home
              </Button>
            </Link>
            <Button color='blue' basic>
              <Icon name='film' /> View Project
            </Button>
            <Button color='blue' basic>
              <Icon name='edit' /> Edit Project
            </Button>
          </Modal.Actions>
        </Modal>
        <Route path='/viewprojects' component={ViewProjects} />
      </div>
    );
  }
}

export default SaveProjectModal;
