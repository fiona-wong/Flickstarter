import React from 'react';
import $ from 'jquery';
import { Container, Segment, Statistic } from 'semantic-ui-react';

class OverallStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalContributions: '',
      totalBackers: '',
      totalProjects: ''
    };
  }

  componentDidMount () {
    $.get('/projects', data => {
      let contributions = [];
      let totalBackers;
      data.projects.map(project => {
        contributions.push(project.raised_amount);
      });

      $.get('/userProjectContributions/getProjectContributionsCount', count => {
        console.log('the count data', count);
        totalBackers = count;

        let totalContributions = contributions.reduce((a, b) => a + b);
        let totalProjects = data.projects.length;

        this.setState({
          totalDollars: totalContributions,
          totalProjects: data.projects.length,
          totalBackers: totalBackers
        });
      });
    });
  }

  render() {
    return (
      <div>
        <div className='project-status-container' style={{opacity: '.5', width: '35%', margin: 'auto'}}>
          <Segment inverted compact>
            <Statistic inverted color='red' value={this.state.totalDollars} label='total dollars raised' style={{opacity: '1'}} />
            <Statistic inverted color='green' value={this.state.totalBackers} label='backers' style={{opacity: '1'}}/>
            <Statistic inverted color='teal' value={this.state.totalProjects} label='projects' style={{opacity: '1'}}/>
          </Segment>
        </div>
      </div>
    );
  }
}

export default OverallStats;
