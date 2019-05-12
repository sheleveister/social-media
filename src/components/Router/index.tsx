import * as React from 'react';
import Loadable from 'react-loadable';
import { Redirect, Route, Switch } from 'react-router-dom';

const UserComponent = Loadable({
  loader: () => import('../User'),
  loading: null,
});


class Router extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route exact path="/user" component={UserComponent} />
      </Switch>
    )
  }
}

export default Router;