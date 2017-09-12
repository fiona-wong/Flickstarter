import React from 'react';
import {Statistic, Progress} from 'semantic-ui-react';

class FeaturedProjectStatus extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='project-status-container'>
        <Progress id='featured-project-status-bar' size='medium' percent='88' indicating />
        <div id='featured-project-statistics-container'>
          <Statistic.Group size='mini'>
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
        <div id='featured-project-contribute-button-container'>
         <a className="coinbase-button" data-code="2b30a03995ec62f15bdc54e8428caa87" href="https://www.coinbase.com/checkouts/2b30a03995ec62f15bdc54e8428caa87">Donate Bitcoin!</a>
        </div>
      </div>
    );
  }
}

export default FeaturedProjectStatus;
