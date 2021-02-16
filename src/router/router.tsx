import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import LoginPageComponent from '../views/Login/index';
import SongListComponent from '../views/FindMusic/SongList/index';
import Home from '../views/Home/index';


export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={ Home }></Route>
                <Route path="/login" component={ LoginPageComponent }></Route>
                <Route path="/FindMusic/SongList" component={ SongListComponent }></Route>
            </Switch>
        </HashRouter>
    )
}