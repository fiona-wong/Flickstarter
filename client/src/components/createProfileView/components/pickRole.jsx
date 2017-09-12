import React from 'react';
import { Container, Grid, Step, Dropdown, Button } from 'semantic-ui-react';


const PickRole = (props) => (
  <Grid columns={2}>
    <Grid.Column width={5}>
      <Step onClick={props.handleOnRoleClick} active={props.roleActive} completed={props.roleComplete}>
        <Step.Content>
          <Step.Title>Role</Step.Title>
        What do you do?
        </Step.Content>
      </Step>
    </Grid.Column>
    <Grid.Column width={11}>
      {props.roleActive ? (
        <Container>
          <Dropdown value={'Author'} onChange={props.handleRoleSelect} placeholder='Select Roles' fluid multiple selection options={props.roles} />
          <Button floated='right' onClick={props.saveRoles}>Next</Button>
        </Container>
      ) : (<div></div>)}
    </Grid.Column>
  </Grid>
);


export default PickRole;
