import React from 'react';
import ReactDOM from 'react-dom';
import {Segment, Embed, Progress} from 'semantic-ui-react';
import Youtube from 'react-youtube';
import $ from 'jquery';
import {commafy, getDaysRemaining} from '../../helpers.js'; 

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
          <Segment raised>
            <div className='basic-flex-row'>
              <h1>
                {this.state.project.name}
              </h1>
              <h3>
                
              </h3>
            </div>
            <div className='basic-flex-row'>
              <div className='basic-flex-column' style={{width: '65%'}}>
                {
                  this.state.videoType === 'vimeo' ?
                  <Embed
                    autoplay={false}
                    brandedUI={true}
                    color='white'
                    hd={true}
                    id={this.state.videoId}
                    defaultActive={true}
                    iframe={{
                      allowFullScreen: true,
                      style: {
                        width: '100%',
                        height: '100%'
                      },
                    }}
                    source='vimeo'
                  />

                   :
                  <Youtube
                    videoId={this.state.videoUrl}
                    opts={{width: '100%'}}
                  />                      
               }
                
              </div>
              <div className='basic-flex-column' style={{width: '35%', paddingLeft: '2%'}}>
                Project stats go here
                <Progress id='featured-project-status-bar' size='small' percent={(this.state.project.raised_amount / this.state.project.goal_amount) * 100} indicating />
                <div>
                  ${this.state.raisedAmount}
                  <br /> contributed of ${this.state.goalAmount} goal
                </div>
                <div>
                  20 contributors
                </div>
                <div>
                  {this.state.daysRemaining} days remaining
                </div>
              </div>
            </div>
          </Segment>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
