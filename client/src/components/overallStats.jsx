import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

class OverallStats extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className='project-status-container' style={{opacity: '.5'}}>
          <Segment inverted>
            <Statistic inverted color='red' value='$747' label='total dollars raised' style={{opacity: '1'}} />
            <Statistic inverted color='yellow' value='395' label='total BTC raised' style={{opacity: '1'}}/>
            <Statistic inverted color='green' value='653' label='backers'  style={{opacity: '1'}}/>
            <Statistic inverted color='teal' value='104' label='projects' style={{opacity: '1'}}/>
          </Segment>
        </div>
      </div>
    );
  }
}

export default OverallStats;
