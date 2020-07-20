import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { routes } from 'routes'
import NotFound from 'views/NotFound'
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map(route => (
            <Route
            exact
            key={route.name}
            path={route.path}
            render={props => <route.Component {...props} name={route.name}/>}
          />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

// La imagen hay que exportarla de una api.. de manera que se pueda cambiar en base a las necesidades que se tengan en la empresa segun el cliente