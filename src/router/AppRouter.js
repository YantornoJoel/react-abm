import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
// import Header from '../app/Header/Header';
import { Navigation } from '../app/Navigation';
import { AddPelicula } from '../components/Add/AddPelicula';
import { AddUser } from '../components/Add/AddUser';
import { Home } from '../components/Home/Home';
import { ListPelicula } from '../components/List/ListPelicula';
import { ListUser } from '../components/List/ListUser';
import { Login } from '../components/Login/Login';
import { Settings } from '../components/Settings/Settings';
import { UpdatePelicula } from '../components/Update/UpdatePelicula';
import { UpdateUser } from '../components/Update/UpdateUser';
import { UserProvider } from '../context/UserContext';


const AppState = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Header /> */}
                <AppState>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/user/add" component={AddUser} />
                        <Route exact path="/user/list" component={ListUser} />
                        <Route exact path="/user/update" component={UpdateUser} />
                        <Route exact path="/pelicula/add" component={AddPelicula} />
                        <Route exact path="/pelicula/list" component={ListPelicula} />
                        <Route exact path="/pelicula/update" component={UpdatePelicula} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/login" component={Login} />
                        <Redirect to="/" />
                    </Switch>
                </AppState>
            </div>
        </Router>
    )
}
