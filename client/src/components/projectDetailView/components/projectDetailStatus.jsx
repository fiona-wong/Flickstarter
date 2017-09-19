import React from 'react';
import {Progress} from 'semantic-ui-react';
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
        <h2>20</h2>
        <p>contributors</p>
        <h2>{props.daysRemaining}</h2>
        <p>days remaining</p>
      </div>
      <SupportModal project={props.project} informer={props.informer}/>
    </div>
  );
};

export default ProjectDetailStatus;
