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
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505518689/1_jo9krg.jpg" />
              <p className="legend">New York City</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505863685/NatashaHenstridgeShootingMovieSceneBeach8t0d0Kagdc6x_uchvh5.jpg" />
              <p className="legend">Los Angeles, California</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505863685/1yr-documentary-1400x500-1_1_i6ml83.jpg" />
              <p className="legend">San Francisco, California</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505866274/slack-imgs-2_zhfxte.jpg" />
              <p className="legend">Miami, Florida</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505866275/slack-imgs-1_kzriel.jpg" />
              <p className="legend">Salt Lake City, Utah</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505867077/sundance-night_fgfbee.jpg" />
              <p className="legend">Sundance Film Festival</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505867077/o_pjjn6a.jpg" />
              <p className="legend">Chicago, Illinois</p>
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505867077/BRS_mountains_eobhkk.jpg" />
              <p className="legend">Portland, Oregon</p>
            </div>
          </Carousel>
        </div>
    );
  }
}

export default Welcome;


