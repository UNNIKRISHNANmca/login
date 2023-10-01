import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './registers';
import Login from './login';
import Dashboard from './dashboard';
import UserTable from './data';

const App = () => {
  return (
    <Router>
    <div>

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/data" component={UserTable} />
      </div>
    </Router>
  );
};

export default App;
