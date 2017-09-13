import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

class OverallStats extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className='project-status-container'>
          <Segment>
            <Statistic inverted color='red' value='$75487' label='total dollars raised' />
            <Statistic inverted color='yellow' value='3095' label='total BTC raised' />
            <Statistic inverted color='green' value='15623' label='backers' />
            <Statistic inverted color='teal' value='63404' label='projects' />
          </Segment>
        </div>
      </div>
    );
  }
}

export default OverallStats;
