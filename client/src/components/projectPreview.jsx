import React from 'react';
import ReactDOM from 'react-dom';

import { Image, Segment } from 'semantic-ui-react';

class ProjectPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="ui raised very padded text container segment fluid">
            <Image src='https:www.bettycrocker.com/-/media/Images/BC/recipe-heros/desserts/ultimate-chocolate-chip-cookies_hero.jpg?W=800' size='small' />
            <h2 className="ui header">Cookies by Fiona</h2>
          </div>
    );
  }

}

export default ProjectPreview;

// https:www.bettycrocker.com/-/media/Images/BC/recipe-heros/desserts/ultimate-chocolate-chip-cookies_hero.jpg?W=800
