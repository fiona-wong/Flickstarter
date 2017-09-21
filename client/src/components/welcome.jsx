import React from 'react';
import { Container, Image } from 'semantic-ui-react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

import OverallStats from './OverallStats.jsx';


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
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505863685/NatashaHenstridgeShootingMovieSceneBeach8t0d0Kagdc6x_uchvh5.jpg" />
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505863685/1yr-documentary-1400x500-1_1_i6ml83.jpg" />
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505866274/slack-imgs-2_zhfxte.jpg" />
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505866275/slack-imgs-1_kzriel.jpg" />
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505867077/sundance-night_fgfbee.jpg" />
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505867077/o_pjjn6a.jpg" />
            </div>
            <div>
              <img src="http://res.cloudinary.com/dyrrwpemp/image/upload/v1505867077/BRS_mountains_eobhkk.jpg" />
            </div>
          </Carousel>
        </div>
    );
  }
}

export default Welcome;


