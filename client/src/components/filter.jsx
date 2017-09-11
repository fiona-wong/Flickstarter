import React from 'react';
import ReactDOM from 'react-dom';

import { Dropdown, Input } from 'semantic-ui-react';

const tagOptions = [
  {
    text: 'Action',
    value: 'Action',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    text: 'Adventure',
    value: 'Adventure',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    text: 'Animated',
    value: 'Animated',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    text: 'Comedy',
    value: 'Comedy',
    label: { color: 'green', empty: true, circular: true },
  },
  {
    text: 'Crime',
    value: 'Crime',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    text: 'Documentary',
    value: 'Documentary',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    text: 'Drama',
    value: 'Drama',
    label: { color: 'grey', empty: true, circular: true },
  },
  {
    text: 'Musical',
    value: 'Musical',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    text: 'Science Fiction',
    value: 'Science Fiction',
    label: { color: 'teal', empty: true, circular: true },
  },
  {
    text: 'War',
    value: 'War',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
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