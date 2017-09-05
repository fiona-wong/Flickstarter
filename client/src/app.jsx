import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import Profile from './components/profile.jsx';
import CreateProject from './components/createProject.jsx';
import ViewProjects from './components/viewProjects.jsx';
import Search from './components/search.jsx';
import Messages from './components/messages.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path='/' component={Home} />

          <Link to={'/createproject'}>
            <button>Create Project</button>
          </Link>

          <Link to={'/viewprojects'}>
            <button>View Projects</button>
          </Link>

          <Link to={'/profile'}>
            <button>Profile</button>
          </Link>

          <Link to={'/messages'}>
            <button>Messages</button>
          </Link>

          <Search />

          <Route path='/createproject' component={CreateProject} />
          <Route path='/viewprojects' component={ViewProjects} />
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
        </div>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));



