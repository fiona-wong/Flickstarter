import React from 'react';
import {Header, Menu, Dropdown} from 'semantic-ui-react';

const ProjectRoles = (props) => (
  <div className='project-detail-item-container'>
    <div className='project-detail-item-header-container'>
      <Header as='h4'>Open roles</Header>
    </div>
    <div className='project-detail-item-content-container'>
      <Menu widths={1} className='project-role-dropdown'>
        <Dropdown fluid multiple selection
          value={props.projectRoles}
          options={props.roleOptions} 
          onChange={props.handleRoleSelection}
          scrolling={true}
          placeholder='Select roles'
        />
      </Menu>
      <p> Are you looking for any talent for this project? Interested parties may message you if they think they can help. </p>
    </div>
  </div>
);

export default ProjectRoles;
