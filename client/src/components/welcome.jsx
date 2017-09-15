import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css'
import 'react-responsive-carousel/lib/styles/carousel.css'


class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Carousel axis="horizontal" showArrows={true} dynamicHeight emulateTouch>
          <div>
            <img src="https://news.thefilmlocations.com/wp-content/uploads/2014/10/Director_of_Photography_for_IMAX%C2%AE_3D_movie_Hidden_Universe_Malcolm_Ludgate_filming.jpg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="http://www2.pictures.zimbio.com/fp/Natasha+Henstridge+Shooting+Movie+Scene+Beach+8t0d0Kagdc6x.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="http://www.osoyoostimes.com/wp-content/uploads/2014/07/movie_w.jpg" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/1b/68/37/set-in-paris-movie-tours.jpg" />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Welcome;
