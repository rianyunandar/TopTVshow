import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Home } from './Views/Home';
import Show from './Views/Show';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">< Home /></Route>
            < Route path="/shows/" component={Show} />
        </Switch>
        
    )
}

export default Routes
