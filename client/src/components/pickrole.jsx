import React from 'react';
import { Grid, Step, Dropdown, Button } from 'semantic-ui-react';


const PickRole = (props) => (
  <Grid columns={2}>
    <Grid.Column width={5}>
      <Step active={props.roleActive} completed={props.roleComplete}>
        <Step.Content>
          <Step.Title>Role</Step.Title>
        What do you do?
        </Step.Content>
      </Step>
    </Grid.Column>
    <Grid.Column width={11}>
      <Dropdown onChange={props.handleRoleSelect} placeholder='Select Roles' fluid multiple selection options={props.roles} />
      <Button floated='right' onClick={props.saveRoles}>Next</Button>
    </Grid.Column>
  </Grid>
);


export default PickRole;