import React from 'react';
import Header from 'grommet/components/Header';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Navbar from '../Navbar.jsx';

class CreateProject extends React.Component {
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
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#cccccc'
        }}
      >
        <Navbar />
      </div>
    );
  }
}

export default CreateProject;
