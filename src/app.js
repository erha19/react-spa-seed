'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { compose, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createRoute from './routes';
import reducers from './reducers/';
import './index.less';

let store = createStore(reducers, {}, compose(
    applyMiddleware(thunkMiddleware)
));

if (process.env.NODE_ENV !== "production") {
    store = createStore(reducers, {}, compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}

ReactDom.render(
    <Provider store={store}>
        {createRoute(store)}
    </Provider>,
    document.getElementById('container')
);
