import React from 'react';
import { Container, Image } from 'semantic-ui-react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';


class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Carousel axis="horizontal" width='100%' showArrows showThumbs={false} infiniteLoop autoPlay dynamicHeight emulateTouch>
            <div>
              <Image fluid src="" />
              <p className="legend">New York City</p>
            </div>
            <div>
              <img src="" />
              <p className="legend">Los Angeles, California</p>
            </div>
            <div>
              <img src="" />
              <p className="legend">Bay Area, California</p>
            </div>
          </Carousel>
        </div>
    );
  }
}

export default Welcome;
