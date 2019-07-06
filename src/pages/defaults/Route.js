
import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import HoiNghi from './HOINGHI';
import SanhHoiNghi from './SanhHoiNghi';
import TiecCuoi from './TIECCUOI';
import Footer from './Footer';


function DefaultContent(route) {
    return (
        <Route
            key={route.path}
            exact
            path={route.path}
            render={props => (
                <div>
                    <Header />
                    <route.component component={route.component} />
                    <Footer />
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
    },
    {
        path: "/hoinghi",
        component: HoiNghi,
        routes: [],
        exact: true
    },
    {
        path: "/sanhhoinghi",
        component: SanhHoiNghi,
        routes: [],
        exact: true
    },
    {
        path: "/tieccuoi",
        component: TiecCuoi,
        routes: [],
        exact: true
    },
];

const Router = RouteList.map((route, i) => DefaultContent(route));

export {
    Router
}