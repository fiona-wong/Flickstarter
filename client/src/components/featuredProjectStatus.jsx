import React from 'react';
import {Icon, Statistic, Progress} from 'semantic-ui-react';

const items = [
  { label: 'funded', value: '22%' },
  { label: 'contributed', value: '$2,543' },
  { label: 'backers', value: '49'},
  { label: 'days to go', value: '2'}
];

class FeaturedProjectStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '30%', display: 'flex',flexDirection: 'column', justifyContent: 'left'}}>
        <Progress size='medium' percent='57' indicating/>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Icon name="map pin" size="large"/>
            Project location goes here
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Statistic.Group items={items} size='mini' widths='5'/>
        </div>
      </div>
    );
  }
}

export default FeaturedProjectStatus;
