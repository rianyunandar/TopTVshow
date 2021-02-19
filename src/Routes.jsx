import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Home } from './Views/Home';
import Show from './Views/Show';
import Detail from './Components/Show/TVDetail';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">< Home /></Route>
            < Route path="/shows/" component={Show} />
            < Route path="/show/:id" component={Detail} />
        </Switch>
        
    )
}

export default Routes
