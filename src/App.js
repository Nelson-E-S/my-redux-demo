import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import PostsPages from './pages/PostsPages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/posts" component={PostsPages} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
