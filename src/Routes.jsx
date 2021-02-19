import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Home } from './Views/Home';
import Show from './Views/Show';
import Detail from './Components/Show/TVDetail';
import ProtectedRoute from "./auth/protected-route";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './Components/loading';
const Routes = () => {
    const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
    return (
        <Switch>
            <Route exact path="/">< Home /></Route>
            < ProtectedRoute path="/shows/" component={Show} />
            < ProtectedRoute path="/show/:id" component={Detail} />
        </Switch>
        
    )
}

export default Routes
