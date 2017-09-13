import React from 'react';
import {Dropdown} from 'semantic-ui-react';


const tagOptions = [
  { key: 1,
    text: 'Action',
    value: 'Action',
    label: { color: 'red', empty: true, circular: true },
  },
  { key: 2,
    text: 'Adventure',
    value: 'Adventure',
    label: { color: 'blue', empty: true, circular: true },
  },
  { key: 3,
    text: 'Animated',
    value: 'Animated',
    label: { color: 'yellow', empty: true, circular: true },
  },
  { key: 4,
    text: 'Comedy',
    value: 'Comedy',
    label: { color: 'green', empty: true, circular: true },
  },
  { key: 5,
    text: 'Crime',
    value: 'Crime',
    label: { color: 'black', empty: true, circular: true },
  },
  { key: 6,
    text: 'Documentary',
    value: 'Documentary',
    label: { color: 'pink', empty: true, circular: true },
  },
  { key: 7,
    text: 'Drama',
    value: 'Drama',
    label: { color: 'grey', empty: true, circular: true },
  },
  { key: 8,
    text: 'Musical',
    value: 'Musical',
    label: { color: 'purple', empty: true, circular: true },
  },
  { key: 9,
    text: 'Science Fiction',
    value: 'Science Fiction',
    label: { color: 'teal', empty: true, circular: true },
  },
  { key: 10,
    text: 'War',
    value: 'War',
    label: { color: 'orange', empty: true, circular: true },
  },
  { key: 11,
    text: 'Western',
    value: 'Western',
    label: { color: 'brown', empty: true, circular: true },
  }
];

const getSelected = (e, {value }) => {
  console.log('all elements', e, 'selected valllllll', value);
};

const Filter = () => (
  <Dropdown
    onChange={getSelected}
    options={tagOptions}
    selection
    text='Filter Posts' icon='filter' floating labeled button className='icon'
  />
);

export default Filter;
