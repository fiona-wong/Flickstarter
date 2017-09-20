import React from 'react';
import $ from 'jquery';
import Youtube from 'react-youtube';
import { Tab, Form, TextArea, Modal, Embed, Label, Grid, Header, Container, Divider, Icon, Image, Button } from 'semantic-ui-react';
import ProjectCard from '../projectCard.jsx';
import moment from 'moment';
import SendMessage from './components/sendMessage.jsx';


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
      contributedProjects: [],
      totalContributions: null,
      projects: [],
      message: '',
      subject: '',
      project: '',
      fullProfile: {},
      successMessage: false
    };
    this.getVideoId = this.getVideoId.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.get(`${this.props.location.pathname}/u`, data => {
      console.log(data);
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
        contributedProjects: data.profile.contributions,
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
      {receiver: this.state.fullProfile.id,
        message: this.state.message,
        subject: this.state.subject,
        project: this.state.project
      },
      data => {
        console.log('success');
        this.setState({
          successMessage: true
        });
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

        <Grid centered>
          <Grid.Row>
            <Container>
              <Header as="h2" textAlign="center" >{this.state.first + ' ' + this.state.last}</Header>
              <Image centered shape="circular" size='medium' src={this.state.photo}/>
              <Container textAlign="center">
                <Icon name="marker"/>{this.state.location}
              </Container>
              <Container textAlign="center">
                {this.state.roles.map((role, index) => (
                  <Label key={index}>{role.position}</Label>
                ))}
                <br/>
                <a target="_blank" href={this.state.linkedin}>LinkedIn</a> | <a target="_blank" href={this.state.personalsite}>Personal Website</a>
                <br/><br/>
              </Container>
              <Container textAlign="center">
                {this.state.about}
              </Container>
              <SendMessage
                successMessage={this.state.successMessage}
                projects={this.state.projects}
                username={this.state.fullProfile.id}
                submitMessage={this.submitMessage}
                handleChange={this.handleChange}
              />
            </Container>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <Tab menu={{ secondary: true, pointing: true }} panes={[
              {menuItem: 'Projects Created', render: () => <Tab.Pane attached={false}>
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
              </Tab.Pane>},
              { menuItem: 'Projects Backed', render: () => <Tab.Pane attached={false}>
                {this.state.contributedProjects.map((project, index) =>
                  <ProjectCard
                    key={index}
                    project={project}
                    profilePage={this.state.first}
                    profile={this.state.fullProfile}
                    id={project.id}
                    userUpvotes={this.state.userUpvotes}
                  />
                )}
              </Tab.Pane> },
              { menuItem: 'Portfolio', render: () => <Tab.Pane attached={false}>
                <Grid.Column>
                  {this.state.youtubes.map((youtube, index) =>
                    <Grid.Row key={index}>
                      <Youtube
                        key={index}
                        videoId={this.getVideoId(youtube.link)}
                      />
                    </Grid.Row>
                  )}
                </Grid.Column>
              </Tab.Pane> },
            ]} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
