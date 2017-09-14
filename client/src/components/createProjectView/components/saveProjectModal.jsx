import React from 'react';
import Home from '../../home.jsx';
import EditProject from '../../editProject.jsx';
import { Button, Header, Icon, Modal, Image, List, Embed } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class SaveProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoType: ''
    }
    this.commafy = this.commafy.bind(this);
  }

  commafy(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getVideoType(url) {
    if (this.props.projectVideo.includes('vimeo')) {
      this.setState({
        videoType: 'vimeo'
      });
    }
  }

  componentWillMount() {
    this.getVideoType(this.props.projectVideo);
  }

  render() {
    return (
      <div>
        <Modal open={true} >
          <Modal.Header style={{textAlign: 'center'}}>Success!</Modal.Header>
            <Modal.Content>
              <div className='basic-flex-row' >
                <div id='save-modal-media-container'>
                  <Image fluid wrapped 
                    size='medium' 
                    shape='rounded' 
                    src={this.props.projectImage} 
                    style={{paddingBottom: '1rem'}}
                  />
                  <div id='video-preview-container'>
                    {
                      this.state.videoType === 'vimeo' ?
                      <Embed wrapped
                        id={this.props.projectVideo.substr(this.props.projectVideo.length - 9)}
                        source='vimeo'
                        defaultActive={true}
                      /> :
                      <Embed wrapped
                        id={this.props.projectVideo.substr(this.props.projectVideo.length - 11)}
                        source='youtube'
                        defaultActive={true}
                      />                      
                    }
                  </div>
                </div>
                <div id='save-modal-description-container'>
                  <Modal.Description >
                    <Header>You've created a Flickstarter project. Crowdfunding for {this.props.projectTitle} starts now!</Header>
                    <h5>You can edit your project any time during crowdfunding by navigating to your profile.</h5>
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
                        <List.Header>Campaign End Date</List.Header>
                        {this.props.projectDeadline}
                      </List.Item>
                      <List.Item>
                        <List.Header>Funding goal</List.Header>
                        ${this.commafy(this.props.projectFundingGoal)}
                      </List.Item>
                    </List>
                  </Modal.Description>
                </div>
              </div>
            </Modal.Content>
          <Modal.Actions>
            <Button as={Link} to={'/'} color='blue' basic>
              <Icon name='home' /> Home
            </Button>
            <Link to={`/editproject/${this.props.projectId}`}>
              <Button color='blue' basic
                onClick={this.props.handleEditProjectClick}
              >
                <Icon name='edit' /> Edit Project
              </Button>
            </Link>
          </Modal.Actions>
        </Modal>
        <Route path='/' component={Home} />
      </div>
    );
  }
}

export default SaveProjectModal;
