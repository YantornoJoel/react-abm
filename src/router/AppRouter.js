import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import Header from '../app/Header/Header';
import { Navigation } from '../app/Navigation';
import { AddUser } from '../components/AddUser/AddUser';
import { Home } from '../components/Home/Home';
import { ListUser } from '../components/ListUser/ListUser';
import { Settings } from '../components/Settings/Settings';
import { UpdateUser } from '../components/UpdateUser/UpdateUser';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Header /> */}
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={AddUser} />
                    <Route exact path="/list" component={ListUser} />
                    <Route exact path="/update" component={UpdateUser} />
                    <Route exact path="/settings" component={Settings} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
