import React from 'react';
import ReactDOM from 'react-dom';
import {Segment, Progress, Icon, Divider} from 'semantic-ui-react';
import $ from 'jquery';
import {commafy, getDaysRemaining} from '../../helpers.js';
import ProjectDetailHeader from './components/projectDetailHeader.jsx';
import ProjectDetailVideo from './components/projectDetailVideo.jsx';
import ProjectDetailStatus from './components/projectDetailStatus.jsx';

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      videoType: '',
      daysRemaining: '',
      videoId: '',
      raisedAmount: '',
      goalAmount: ''
    };
  }

  componentWillMount() {
    let _this = this;
    $.ajax({
      url: `/projects/${this.props.match.params.id}`,
      type: 'GET',
      success: (data) => {
        _this.setState({
          project: data,
          videoId: data.video_url.includes('vimeo') ? data.video_url.substr(data.video_url.length - 9) : data.video_url.substr(data.video_url.length - 11),
          videoType: data.video_url.includes('vimeo') ? 'vimeo' : 'youtube',
          daysRemaining: getDaysRemaining(data),
          raisedAmount: commafy(data.raised_amount),
          goalAmount: commafy(data.goal_amount)
        });
      },
      error: (err) => {
        console.log(err.statusText, err);
      }
    });
  }

  render() {
    return (
      <div className="page-header-padding">
        <div className='body-container'>
          <Segment raised padded>
            <ProjectDetailHeader 
              project={this.state.project}
            />
            <div className='basic-flex-row'>
              <ProjectDetailVideo 
                videoType={this.state.videoType}
                videoId={this.state.videoId}
                project={this.state.project}
              />
              <ProjectDetailStatus 
                project={this.state.project}
                raisedAmount={this.state.raisedAmount}
                goalAmount={this.state.goalAmount}
                daysRemaining={this.state.daysRemaining}
              />
            </div>
            <Divider horizontal />
            <div className='project-detail-about'>
              <h2> About this project </h2>
              {this.state.project.long_description}
            </div>
          </Segment>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
