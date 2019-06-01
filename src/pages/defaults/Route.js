
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';


function DefaultContent(route) {
    return (
        <Route
            key={route.path}
            exact
            path={route.path}
            render={props => (
                <div>
                    <Header />
                    <route.component  component={route.component} />
                </div>
            )}
        />
    );
}

const RouteList = [ 
    {
        path: "/",
        component: HomePage,
        routes: [],
        exact: true
    }
];

const Router = RouteList.map((route, i) => DefaultContent(route));

export {
    Router
}