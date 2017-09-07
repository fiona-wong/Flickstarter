import React from 'react';
import { Grid, Step, Dropdown, Button } from 'semantic-ui-react';


const PickRole = (props) => {
  return (
    <Grid columns={2}>
      <Grid.Column>
        <Step active={props.roleActive} disabled={!props.roleActive}>
          <Step.Content>
            <Step.Title>Role</Step.Title>
        What do you do?
          </Step.Content>
        </Step>
      </Grid.Column>
      <Grid.Column>
        <Dropdown onChange={props.handleRoleSelect} placeholder='Select Roles' fluid multiple selection options={props.roles} />
        <Button onClick={props.saveRoles}>Next</Button>
      </Grid.Column>
    </Grid>
  );
};

export default PickRole;