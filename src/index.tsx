import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { Create } from './pages/create';
import { Details } from './pages/details';
import './styles/index.module.css';

export const App =() => {

  return (
      <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/add-dog" component={Create}/>
            <PrivateRoute path="/details/:id" component={Details}/>
            <PrivateRoute path="/doggo/:id/edit" component={Details} />
            <PrivateRoute path="/" component={Dashboard}/>
            <Route component={Login} />
          </Switch>
      </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));