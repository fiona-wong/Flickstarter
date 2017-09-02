import React from 'react';
import Header from 'grommet/components/Header';
import MenuIcon from 'grommet/components/icons/base/Menu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header float={false}
        fixed={true}>
        <Title>
          FlickStarter
        </Title>
        <Box flex={true}
          justify='end'
          direction='row'
          responsive={false}>
          <Search inline={true}
            fill={true}
            size='medium'
            placeHolder='Search'
            dropAlign={{"right": "right"}} />
          <Menu icon={<MenuIcon />}
            dropAlign={{"right": "right"}}>
            <Anchor href='#'
              className='active'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Box>
      </Header>
    );
  }
}

export default Navbar;
