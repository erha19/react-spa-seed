'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";

import home from './home/';



//将现有的reduces加上路由的reducer
const rootReducer = combineReducers({
	home,
    routing: routerReducer
});

export default rootReducer;
