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
              <Image fluid src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505518690/3_hw6t8f.jpg" />
              <p className="legend">Albuquerque, New Mexico</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505518689/5_mk5tbm.jpg" />
              <p className="legend">Los Angeles, California</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505518689/1_jo9krg.jpg" />
              <p className="legend">New York City</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505518689/2_uiv5dv.jpg" />
              <p className="legend">San Francisco, California</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505518690/4_zgji69.jpg" />
              <p className="legend">Austin, Texas</p>
            </div>



          </Carousel>
        </div>
    );
  }
}

export default Welcome;
