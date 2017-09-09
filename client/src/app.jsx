import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react';
import Home from './components/home.jsx';
import MenuBar from './components/menuBar.jsx';




class App extends React.Component {
  render() {
    return (
      <div>
        <Router>

          <div>

            <MenuBar />

            <Route exact={true} path='/' component={Home} />

          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;