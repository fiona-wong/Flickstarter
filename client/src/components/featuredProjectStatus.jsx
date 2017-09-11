import React from 'react';
import {Statistic, Progress} from 'semantic-ui-react';

class FeaturedProjectStatus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{width: '70%', height: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'left', marginLeft: '15%'}}>
        <Progress size='medium' percent='88' indicating style={{marginBottom: '10px'}}/>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingRight: '2%'}}>
          <Statistic.Group size='mini' style={{marginBottom: '-3%'}}>
            <Statistic>
              <Statistic.Value>88%</Statistic.Value>
              <Statistic.Label>funded</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>$840,301</Statistic.Value>
              <Statistic.Label>contributed</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>7,106</Statistic.Value>
              <Statistic.Label>backers</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>6</Statistic.Value>
              <Statistic.Label>days remaining</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </div>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
         <a className="coinbase-button" data-code="2b30a03995ec62f15bdc54e8428caa87" href="https://www.coinbase.com/checkouts/2b30a03995ec62f15bdc54e8428caa87">Donate Bitcoin!</a>
        </div>
      </div>
    );
  }
}
export default FeaturedProjectStatus;