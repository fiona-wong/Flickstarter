import React from 'react';
import ReactDOM from 'react-dom';

import { Card, Grid, Icon, Image, Segment } from 'semantic-ui-react';

const ProjectPreview = (props) => (
  <div>
    <Grid columns={2} padded>
    {props.projects.map((project, index) =>
        <Grid.Column>

          <Card key={index}>

            <Image src={project.photo_url} />

            <Card.Content >

              <Card.Header>
                {project.name}
              </Card.Header>

              <Card.Meta>
                {project.short_description}
              </Card.Meta>

              <Card.Description>
               {project.long_description}
              </Card.Description>


            </Card.Content>

            <Card.Content extra>
              <a>
                Insert progress bar here.
              </a>

            </Card.Content>

          </Card>
        </Grid.Column>
    )}
    </Grid>
  </div>
);

export default ProjectPreview;
