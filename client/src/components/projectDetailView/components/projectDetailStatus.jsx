import React from 'react';
import {Progress, Icon, Segment} from 'semantic-ui-react';
import SupportModal from '../../supportModal.jsx';

const ProjectDetailStatus = (props) => {
  return (
    <div className='basic-flex-column' style={{width: '35%', paddingLeft: '2%'}}>
      <Progress indicating
        id='featured-project-status-bar'
        size='small'
        percent={(props.project.raised_amount / props.project.goal_amount) * 100}
      />
      <div className='project-detail-stats'>
        <h2>${props.raisedAmount}</h2>
        <p>contributed of ${props.goalAmount} goal</p>
        <h2>{props.project.contributions ? props.project.contributions.length : null}</h2>
        <p>backers</p>
        <h2>{props.daysRemaining}</h2>
        <p>days remaining</p>
      </div>
      {
        props.userBacked === true ?
        <div className='user-contribution-text'>
          <Icon name='star' size='large'/> 
          <div className='basic-flex-row'>
            You contributed <p>${props.userContribution.contribution}</p>
          </div>
        </div> :
        <SupportModal
          project={props.project} 
          informer={props.informer}
        />
      }
    </div>
  );
};

export default ProjectDetailStatus;
