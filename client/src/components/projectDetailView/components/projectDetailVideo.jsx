import React from 'react';
import {Embed, Icon} from 'semantic-ui-react';
import Youtube from 'react-youtube';

const ProjectDetailVideo = (props) => {
  return (
    <div className='basic-flex-column' style={{width: '65%'}}>
      {
        props.videoType === 'vimeo' ?
        <Embed
          autoplay={false}
          brandedUI={true}
          color='white'
          hd={true}
          id={props.videoId}
          defaultActive={true}
          iframe={{
            allowFullScreen: true,
            style: {
              width: '100%',
              height: '100%'
            },
          }}
          source='vimeo'
        />
        :
        <Youtube
          videoId={props.videoId}
          opts={{width: '100%'}}
        />                      
      }
      <div className='basic-flex-row' style={{paddingTop: '8px'}}>
        <div style={{paddingRight: '20px'}}>
          <Icon name="marker" />
          {props.project.location}
        </div>
        <div>
          <Icon name="tag" />
          {props.project.genre}
        </div>
      </div>
    </div>
  )
};

export default ProjectDetailVideo;