import React from 'react';
import {Statistic, Progress} from 'semantic-ui-react';

class ProjectStatus extends React.Component {
  constructor(props) {
    super(props);
    this.commafy = this.commafy.bind(this);
  }

  commafy(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div>
        <div className='project-status-container'>
          <div className='progress-bar-container'>
            <Progress indicating
              size='tiny' 
              percent={this.props.funded}
            />
          </div>
        </div>
        <div id='project-statistics-container'>
          <div>
            <h5>{this.props.funded}%</h5>
            funded
          </div>
          <div>
            <h5>${this.commafy(this.props.contributed)}</h5>
            contributed
          </div>
          <div>
            <h5>{this.props.contributed / 50}</h5>
            backers
          </div>
          <div>
            <h5>{this.props.daysRemaining}</h5>
            days remaining
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectStatus;
