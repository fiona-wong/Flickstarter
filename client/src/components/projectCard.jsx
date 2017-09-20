import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Container, Card, Grid, Icon, Image, Segment, Popup, Label } from 'semantic-ui-react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { getDaysRemaining } from '../helpers.js';
import $ from 'jquery';
import EditProject from './editProject.jsx';
import ProjectStatus from './projectStatus.jsx';
import Profile from './profileView/profile.jsx';
import Upvote from './upvote.jsx';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvoteCount: this.props.project.upvote_count,
      upvoted: this.props.userUpvotes[this.props.project.id] ? true : false
    };
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  handleUpvote() {
    let upvoteCount = this.state.upvoteCount;
    let isUpvoted = this.state.upvoted;
    this.setState({
      upvoteCount: isUpvoted ? upvoteCount - 1 : upvoteCount + 1,
      upvoted: isUpvoted ? false : true
    });
    $.ajax({
      url: '/followsUpvotes/upvote',
      type: 'POST',
      data: {
        projectId: this.props.project.id
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  render() {
    return (
      <Card fluid raised>
        <Image fluid src={this.props.project.photo_url}/>
        {this.props.pathName === '/profile' ?
          <Popup
            trigger={
              <div className='card-title edit-project-button'>
                <Link to={`/editproject/${this.props.project.id}`}>
                  <Icon circular inverted
                    name='edit'
                  />
                </Link>
              </div>
            }
            content='Edit your project'
            position='left center'
          /> : null
        }
        <Card.Content >
          <div className='card-genre-upvotes'>
            <div>
              {this.props.project.genre}
            </div>
            <div className='basic-flex-centered-column'>
              <div className='basic-flex-row'>
                <Upvote
                  project={this.props.project}
                  handleUpvote={this.handleUpvote}
                  upvoted={this.state.upvoted}
                />
                {this.state.upvoteCount}
              </div>
            </div>
          </div>

          <Card.Header>
            <div id='project-card-content-container'>
              <Link to={`/projects/${this.props.project.id}`}>
                <p>{this.props.project.name}</p>
              </Link>
            </div>
          </Card.Header>

          <Card.Description style={{margin: '0'}}>
            {this.props.project.short_description}
          </Card.Description>

          <Card.Meta>
            <div className='project-card-name-container'>
              {this.props.profilePage ?
                <div>
                  <div className='basic-flex-row'>
                    <Image src={this.props.photo} size="tiny" avatar />
                    By <p>{this.props.creatorName}</p>
                  </div>
                </div> :
                <div className='basic-flex-row'>
                  <Image src={this.props.project.profile.photo} size="tiny" avatar />
                  <div className='basic-flex-centered-column' style={{margin: '0'}}>
                    By
                  </div>
                  <div className='basic-flex-centered-column'>
                    <Link to={`/profile/${this.props.project.profile.id}`}>
                      <p>{this.props.project.profile.display}</p>
                    </Link>
                  </div>
                </div>
              }
            </div>
          </Card.Meta>

        </Card.Content>

        <Card.Content extra style={{paddingTop: '.5em'}}>

          <ProjectStatus
            name={this.props.project.name}
            contributed={this.props.project.raised_amount}
            funded={Math.round(100 * (this.props.project.raised_amount / this.props.project.goal_amount)).toString()}
            daysRemaining={getDaysRemaining(this.props.project)}
            backers={this.props.project.contributions ? this.props.project.contributions.length : null}
          />

        </Card.Content>

      </Card>
    );
  }
}

export default ProjectCard;
