import React from 'react';

const BottomProfile = (props) => (

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
);

export default BottomProfile;
