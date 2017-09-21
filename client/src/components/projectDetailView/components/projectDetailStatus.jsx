import React from 'react';
import {Progress, Icon, Segment} from 'semantic-ui-react';
import SupportModal from '../../supportModal.jsx';
import ThanksModal from '../../thanksModal.jsx';


class ProjectDetailStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paid: false
    };

    this.handlePaid = this.handlePaid.bind(this);
  }

  handlePaid() {
    this.setState({paid: true});
  }

  render() {
    return (
      <div className='basic-flex-column' style={{width: '35%', paddingLeft: '2%'}}>
      {this.state.paid ? <ThanksModal /> : null}
        <Progress indicating
          id='featured-project-status-bar'
          size='small'
          percent={(this.props.project.raised_amount / this.props.project.goal_amount) * 100}
        />
        <div className='project-detail-stats'>
          <h2>${this.props.raisedAmount}</h2>
          <p>contributed of ${this.props.goalAmount} goal</p>
          <h2>{this.props.project.contributions ? this.props.project.contributions.length : null}</h2>
          <p>backers</p>
          <h2>{this.props.daysRemaining}</h2>
          <p>days remaining</p>
        </div>
        {
          this.props.userBacked === true ?
          <div className='user-contribution-text'>
            <Icon name='star' size='large'/>
            <div className='basic-flex-row'>
              You contributed <p>${this.props.userContribution.contribution}</p>
            </div>
          </div> :
          <SupportModal
            project={this.props.project}
            informer={this.props.informer}
            paid={this.state.paid}
            handlePaid={this.handlePaid}
          />
        }
      </div>
    );
  }
}

export default ProjectDetailStatus;
