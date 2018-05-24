import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';
import {Provider} from "react-redux";
import {store} from "./Store";

const Router = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Router;