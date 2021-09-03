import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { Navigation } from '../app/Navigation';
import { AddUser } from '../components/AddUser/AddUser';
import { ListUser } from '../components/ListUser/ListUser';


export const AppRouter = () => {
    return (
        <Router>
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/add" component={AddUser} />
                <Route exact path="/list" component={ListUser} />

                <Redirect to="/" />
            </Switch>
        </div>
    </Router>
    )
}
