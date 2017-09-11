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
        <div style={{width: '70%', height: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'left', marginLeft: '15%'}}>
          <Progress size='small' percent={this.props.funded} indicating style={{marginBottom: '10px'}}/>
        </div>

        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', textAlign: 'center', color: 'black'}}>
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
