import React from 'react';
import $ from 'jquery';
import Youtube from 'react-youtube';
import { Form, TextArea, Modal, Embed, Label, Grid, Header, Container, Divider, Icon, Image, Button } from 'semantic-ui-react';
import ProjectCard from './projectCard.jsx';
import moment from 'moment';
import SendMessage from './sendMessage.jsx';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first: '',
      last: '',
      roles: [],
      location: '',
      about: '',
      linkedin: '',
      personalsite: '',
      youtubes: [],
      photo: '',
      totalContributions: null,
      projects: [],
      message: '',
      subject: '',
      project: '',
      fullProfile: {}
    };
    this.getVideoId = this.getVideoId.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.get(`${this.props.location.pathname}/u`, data => {
      this.setState({
        username: data.profile.username,
        first: data.profile.first,
        last: data.profile.last,
        location: data.profile.location,
        about: data.profile.about,
        linkedin: data.profile.linkedin,
        personalsite: data.profile.personalsite,
        photo: data.profile.photo,
        youtubes: data.youtubes,
        projects: data.projects,
        fullProfile: data.profile,
        roles: data.profile.roles,
        userUpvotes: data.userUpvotes
      });
    });
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      $.get(`${this.props.location.pathname}/u`, data => {
        this.setState({
          username: data.profile.username,
          first: data.profile.first,
          last: data.profile.last,
          location: data.profile.location,
          about: data.profile.about,
          linkedin: data.profile.linkedin,
          personalsite: data.profile.personalsite,
          photo: data.profile.photo,
          youtubes: data.youtubes,
          projects: data.projects,
          fullProfile: data.profile,
          roles: data.profile.roles
        });
      });
    }
  }

  getVideoId (url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return 'error';
    }
  }

  submitMessage(event) {
    $.post('/messages/send',
      {receiver: this.state.username,
        message: this.state.message,
        subject: this.state.subject,
        project: this.state.project
      },
      data => {
        console.log('success');
      }
    );
  }

  handleChange(event, data) {
    event.preventDefault();
    this.setState({
      [data.name]: data.value
    });
  }

  render() {
    return (
      <div className="page-header-padding">

        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image shape="circular" size='medium' src={this.state.photo}/>
              <SendMessage
                projects={this.state.projects}
                username={this.state.username}
                submitMessage={this.submitMessage}
                handleChange={this.handleChange}
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <Container>
                <Container>
                  <Header as="h2" textAlign="left" >{this.state.first + ' ' + this.state.last}</Header>
                  <Icon name="marker"/>{this.state.location}
                  <br/>
                  {this.state.roles.map((role, index) => (
                    <Label key={index}>{role.position}</Label>
                  ))}
                  <br/>
                  <a target="_blank" href={this.state.linkedin}>LinkedIn</a> | <a target="_blank" href={this.state.personalsite}>Personal Website</a>
                  <br/><br/>
                </Container>
                <Container>
                  {this.state.about}
                </Container>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <Grid.Column>
              <Label as='a' ribbon>Projects Created</Label>
              <Container>
                {this.state.projects.map((project, index) =>
                  <ProjectCard
                    pathName={this.props.location.pathname}
                    key={index}
                    project={project}
                    profilePage={this.state.first}
                    creatorName={this.state.first + ' ' + this.state.last}
                    photo={this.state.photo}
                    profile={this.state.fullProfile}
                    id={project.id}
                    userUpvotes={this.state.userUpvotes}
                  />
                )}
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Label as='a' ribbon='right'>Past Work</Label>
              <Container>
                {this.state.youtubes.map((youtube, index) =>
                  <Youtube
                    key={index}
                    videoId={this.getVideoId(youtube.link)}
                    opts={{width: '100%'}}
                  />
                )}
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
