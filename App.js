import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/create-user" component={CreateUser} />
        <Route exact path="/edit-user/:id" component={EditUser} />
        <Route exact path="/profile/:id" component={UserProfile} />
        <Route exact path="/edit-profile/:id" component={EditProfile} />
      </Switch>
    </Router>
  );
};

export default App;

