import React from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import LocationIcon from 'grommet/components/icons/base/Location';
import Value from 'grommet/components/Value';

class ProjectStatus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="selection-component"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          alignItems: 'center',
          backgroundColor: '#cccccc'
        }}
      >
        <div
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        >
          <LocationIcon 
            colorIndex="plain"
            size="small"
          />
          Project location goes here
        </div>
        <Box>
          <Meter 
            size='medium'
            value={40}
            onActive={...} />
          <Box direction='row'
            justify='between'
            pad={{"between": "small"}}
            responsive={false}>
            <Label size='small'>
              $0
            </Label>
            <Label size='small'>
              Fundraising goal goes here
            </Label>
          </Box>
        </Box>
        <div
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        >
          <Value 
            value={75}
            label='funded'
            units='%'
            responsive={true}
            reverse={false}
            size='small' 
          />
          <Value 
            value={500,000}
            label='contributed'
            units='$'
            responsive={true}
            reverse={false}
            size='small' 
          />
          <Value 
            value={981}
            label='backers'
            responsive={true}
            reverse={false}
            size='small' 
          />
          <Value 
            value={2}
            label='days to go'
            responsive={true}
            reverse={false}
            size='small' 
          />
        </div>
      </div>
    );
  }
}

export default ProjectStatus;
