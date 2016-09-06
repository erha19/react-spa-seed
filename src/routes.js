'use strict';
import React from 'react';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import {createHashHistory} from "history";
import {syncHistoryWithStore} from "react-router-redux";

import Redirect from '@component/redirect';
import Home from '@container/home';
import Layout from '@layout/base';



export default (store) => {
    //创建一个与store事件同步的history对象
    let history = useRouterHistory(createHashHistory)({queryKey: false});
    history = syncHistoryWithStore(history, store);
    return (
        <Router history={history}>
            <Route path='/' component={Layout}>
                <Route path='home' name='home' component={Home} />
                <IndexRoute component={Home}/>
            </Route>
            <Route path="*" component={Redirect}/>
        </Router>
    );

};
