import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import Home from './components/home.jsx';
import Profile from './components/profile.jsx';
import CreateProject from './components/createProject.jsx';
import ViewProjects from './components/viewProjects.jsx';
import Messages from './components/messages.jsx';
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
        <Container>

        </Container>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'));



