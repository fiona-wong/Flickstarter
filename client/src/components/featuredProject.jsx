import React from 'react';
import ReactDOM from 'react-dom';
import { Image, Segment } from 'semantic-ui-react';

class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="ui raised very padded text container segment fluid">
            <Image src='https://i2.wp.com/www.anuvawines.com/tasting-argentina/wp-content/uploads/2013/02/Pinot-Noir.jpg' size='small' />
            <h2 className="ui header">Pinot Noir by Miles</h2>
          </div>
    );
  }

}

export default FeaturedProject;

// https://i2.wp.com/www.anuvawines.com/tasting-argentina/wp-content/uploads/2013/02/Pinot-Noir.jpg