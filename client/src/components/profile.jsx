import React from 'react';
import $ from 'jquery';
import Youtube from 'react-youtube';
import { Label, Grid, Header, Container, Divider, Icon, Image } from 'semantic-ui-react';
import ProjectCard from './projectCard.jsx';
import moment from 'moment';

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
      projects: []
    };
    this.daysRemaining = this.daysRemaining.bind(this);
    this.getVideoId = this.getVideoId.bind(this);
  }

  componentDidMount() {
    $.get('/profiles/myprofile', data => {
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
        projects: data.projects
      });
    });
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
  daysRemaining(project) {
    let formattedDate = project.goal_deadline.slice(6) + project.goal_deadline.slice(0, 2) + project.goal_deadline.slice(3, 5);
    let eventDate = moment(formattedDate);
    let todaysDate = moment();
    return eventDate.diff(todaysDate, 'days');
  }


  render() {
    return (
      <div className='page-header-padding'>
        <Grid centered columns={2}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image shape="circular" size='medium' src={this.state.photo}/>
            </Grid.Column>
            <Grid.Column width={12}>
              <Container>
                <Container>
                  <Header as="h2" textAlign="left" >{this.state.first + ' ' + this.state.last}</Header>
                  <Icon name="marker"/>{this.state.location}
                  <br/>
                  <a href={this.state.linkedin}>LinkedIn</a> | <a href={this.state.personalsite}>Personal Website</a>
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
              <Label as='a' color='teal' ribbon='left'>Projects Created</Label>
              <Container>
                {this.state.projects.map((project, index) =>
                  <ProjectCard
                    key={index}
                    project={project}
                    daysRemaining={this.daysRemaining}
                  />
                )}
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Label as='a' color='teal' ribbon='right'>Past Work</Label>
              <Container>
                {this.state.youtubes.map((youtube, index) =>
                  <Youtube
                    key={index}
                    videoId={this.getVideoId(youtube.link)}
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
