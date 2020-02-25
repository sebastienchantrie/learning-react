import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from '../config/routes';

import '../styles/main.scss';

const App = () => (
  <div className="app">
    <Router>
      <header className={'app-header'}>
        <nav>
          <ul style={{ display: 'inline-block' }}>
            {routes.map((route, i) => (
              <li key={i}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="app-body">
        <div className="main-content">
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </div>
      </div>
    </Router>
  </div>
);

export default App;
