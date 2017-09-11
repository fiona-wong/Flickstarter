import React from 'react';
import { Segment, Container, Grid} from 'semantic-ui-react';



const ShowYoutube = (props) => (
  <div>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.youtube[0].link}`} frameborder="0" allowfullscreen></iframe>
  </div>
);
export default ShowYoutube;
