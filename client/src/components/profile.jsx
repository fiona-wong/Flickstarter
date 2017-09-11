import React from 'react';
import $ from 'jquery';
import Youtube from 'react-youtube';
import { Grid, Header, Container, Divider, Icon, Image } from 'semantic-ui-react';

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
      youtube: [],
      photo: '',
      totalContributions: null
    };
  }

  componentDidMount() {
    $.get('/profiles/myprofile', data => {
      const getVideoId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        } else {
          return 'error';
        }
      };

      this.setState({
        username: data.profile.username,
        first: data.profile.first,
        last: data.profile.last,
        location: data.profile.location,
        about: data.profile.about,
        linkedin: data.profile.linkedin,
        personalsite: data.profile.personalsite,
        photo: data.profile.photo,
        youtube: getVideoId(data.youtubes[0].link)
      });
    });
  }




  render() {
    return (
      <div style={{paddingTop: '55px'}}>
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
              Projects go here
            </Grid.Column>
            <Grid.Column>
              <Youtube
                videoId={this.state.youtube}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Profile;
