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
          <Progress indicating
            size='small' 
            percent={this.props.funded}
          />
        </div>
        <div id='project-statistics-container'>
          <div>
            {this.props.funded}%
            <br />
            funded
          </div>
          <div>
            ${this.commafy(this.props.contributed)}
            <br />
            contributed
          </div>
          <div>
            {this.props.contributed / 50}
            <br />
            backers
          </div>
          <div>
            {this.props.daysRemaining}
            <br />
            days remaining
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectStatus;
